<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md w-full md:w-3/5"> <!-- Adjusted width to 3/5 of the screen -->

      <!-- Modal -->
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <!-- Modal overlay -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-md w-full md:w-3/5 p-6 py-32 overflow-y-auto max-h-full">
          <button @click="closeModal" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex flex-col md:flex-row md:gap-6 space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex flex-col gap-10 w-full md:w-1/2 px-6 md:p-6 items-center text-center">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="100" cy="100" r="100" fill="#0FB957" />
                <circle cx="100" cy="100" r="73.3333" fill="#0FB957" />
                <path
                  d="M100 76.3931C85.9189 76.3931 74.4444 87.8675 74.4444 101.949C74.4444 116.03 85.9189 127.504 100 127.504C114.081 127.504 125.556 116.03 125.556 101.949C125.556 87.8675 114.081 76.3931 100 76.3931ZM112.216 96.0708L97.7255 110.561C97.3678 110.919 96.8822 111.123 96.3711 111.123C95.86 111.123 95.3744 110.919 95.0167 110.561L87.7844 103.329C87.0433 102.588 87.0433 101.361 87.7844 100.62C88.5255 99.8786 89.7522 99.8786 90.4933 100.62L96.3711 106.498L109.507 93.362C110.248 92.6208 111.474 92.6208 112.216 93.362C112.957 94.1031 112.957 95.3042 112.216 96.0708Z"
                  fill="white" />
              </svg>
              <p class="text-[#171625] text-[24px] md:text-[32px] font-bold">Event has been booked successfully!</p>

              <p class="text-[#818181] text-[18px] font-bold"> Please scan or download the QR receipt below.</p>

            </div>
            <div class="flex flex-col gap-16 w-full md:w-1/2 p-6 items-center">

              <!-- <img src="@/static/qr.png" alt="Image" class=""> -->
              <img :src="qrCodeUrl" alt="QR code" class="w-80 h-80" />


              <!-- Download QR Button -->
              <button @click="downloadQRCode"
                class="w-full font-bold bg-white hover:bg-[#D3AF39] text-[#D3AF39] hover:text-white font-bold py-3 px-5 border border-[#D3AF39] border-1 rounded-md">Download
                QR</button>

            </div>
          </div>

        </div>


      </div>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QRCode from "qrcode";

import { useRouter } from 'vue-router';

// const isModalOpen = ref(true);
const router = useRouter();
const ticketID = ref('');
const qrCodeUrl = ref('');



onMounted(() => {
  // Get the ticketId from the query parameters
  const { ticketId } = router.currentRoute.value.query;
  if (ticketId) {
    ticketID.value = ticketId;
    // console.log(ticketID.value)
    generateQRCode(ticketID.value)
  }
});



// Function to close the modal
const closeModal = () => {
  // isModalOpen.value = false;
  router.push('/');

};
const generateQRCode = (ticketID) => {
  const url = `ticketId=${ticketID}`;
  // console.log(url)
  const options = {
    width: 500,
    height: 500,
    margin: 1,
  };
  QRCode.toDataURL(url, options, (err, dataURL) => {
    if (err) {
      console.error(err);
    } else {
      qrCodeUrl.value = dataURL;
      // this.$refs.qrCodeContainer.innerHTML = `<img src="${dataURL}" alt="QR code">`;
    }
  });
};
const downloadQRCode = () => {
  const link = document.createElement("a");
  link.href = qrCodeUrl.value;
  link.download = "santimEventQR.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

};


</script>


<style scoped>
.selectedd {
  /* border: 4px solid rgb(211, 175, 14); */
  /* transition: all 0.1s ease-in-out; */
  box-sizing: content-box;
  /* Ensure the border is outside the dimensions of the element */
  border: 4px solid rgb(211, 175, 14);
}


/* Styles for the modal overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  /* Ensure the overlay is above other content */
}

/* Styles for the modal content */
.modal-content {
  position: relative;
  z-index: 51;
  /* Ensure the content is above the overlay */
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}

/* Additional styles as needed */
</style>