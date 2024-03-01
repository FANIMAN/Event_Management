<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md w-full md:w-3/5"> <!-- Adjusted width to 3/5 of the screen -->
      <div class="flex flex-col md:flex-row md:gap-6 space-y-4 md:space-y-0 md:space-x-4">

        <!-- First Section - Image, Title, and Description and others-->
        <div class="flex flex-col gap-6 w-full md:w-1/2 p-6">
          <!-- First part - image -->
          <img src="~/assets/img/Cover.png" alt="Image" class="w-full md:h-80 rounded-sm mb-4 md:mr-4">

          <!-- Second part - Title and Description -->
          <div class="flex flex-col gap-1">
            <!-- Title -->
            <h2 class="text-xl font-bold">Saq Jam Comedy Vol 10</h2>

            <!-- Description -->
            <div class="flex gap-4 items-center">
              <p class="text-gray-600">by Saq Central</p>
              <p
                class="px-3 py-[2px] bg-yellow-500 bg-opacity-20 rounded-xl text-[#D3AF35] font-bold text-sm border border-[#D3AF35]">
                2 days left</p>
            </div>
          </div>

          <!-- Third part - Toggleable content -->
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-6 md:gap-10 text-[18px]">
              <button @click="toggleContent('aboutEvent')"
                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'aboutEvent', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'aboutEvent' }">About
                Event</button>
              <button @click="toggleContent('eventLocation')"
                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'eventLocation', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'eventLocation' }">Event
                Location</button>
              <button @click="toggleContent('contact')"
                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'contact', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'contact' }">Contact</button>
            </div>

            <!-- Render dynamic content based on selected tab -->
            <div class="text-justify text-[15px] md:text-lg" v-if="activeTab === 'aboutEvent'">
              <p class="">About Lorem ipsum dolor sit amet consectetur. Sit egestas varius venenatis varius nisl lacus.
                Amet
                volutpat urna vitae id gravida amet est sed. A duis scelerisque aliquam posuere amet in tellus. Est
                senectus est nulla molestie.</p>
            </div>
            <div class="text-justify text-[15px] md:text-lg" v-else-if="activeTab === 'eventLocation'">
              <!-- Embed the map here -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.732682511087!2dYOUR-LONGITUDE!3dYOUR-LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR-PLACE!2sYOUR-PLACE!5e0!3m2!1sen!2set!4v1644892687512!5m2!1sen!2set"
                height="100" class="w-full" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="text-justify text-[15px] md:text-lg" v-else-if="activeTab === 'contact'">
              <div class="flex w-full my-2">
                <div class="flex flex-col gap-2 w-1/2">
                  <div class="flex flex-row gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.3083 15.2751C18.3083 15.5751 18.2416 15.8834 18.1 16.1834C17.9583 16.4834 17.775 16.7667 17.5333 17.0334C17.125 17.4834 16.675 17.8084 16.1666 18.0167C15.6666 18.2251 15.125 18.3334 14.5416 18.3334C13.6916 18.3334 12.7833 18.1334 11.825 17.7251C10.8666 17.3167 9.90829 16.7667 8.95829 16.0751C7.99996 15.3751 7.09163 14.6001 6.22496 13.7417C5.36663 12.8751 4.59163 11.9667 3.89996 11.0167C3.21663 10.0667 2.66663 9.11675 2.26663 8.17508C1.86663 7.22508 1.66663 6.31675 1.66663 5.45008C1.66663 4.88341 1.76663 4.34175 1.96663 3.84175C2.16663 3.33341 2.48329 2.86675 2.92496 2.45008C3.45829 1.92508 4.04163 1.66675 4.65829 1.66675C4.89163 1.66675 5.12496 1.71675 5.33329 1.81675C5.54996 1.91675 5.74163 2.06675 5.89163 2.28341L7.82496 5.00841C7.97496 5.21675 8.08329 5.40841 8.15829 5.59175C8.23329 5.76675 8.27496 5.94175 8.27496 6.10008C8.27496 6.30008 8.21663 6.50008 8.09996 6.69175C7.99163 6.88341 7.83329 7.08341 7.63329 7.28341L6.99996 7.94175C6.90829 8.03341 6.86663 8.14175 6.86663 8.27508C6.86663 8.34175 6.87496 8.40008 6.89163 8.46675C6.91663 8.53341 6.94163 8.58341 6.95829 8.63341C7.10829 8.90841 7.36663 9.26675 7.73329 9.70008C8.10829 10.1334 8.50829 10.5751 8.94163 11.0167C9.39163 11.4584 9.82496 11.8667 10.2666 12.2417C10.7 12.6084 11.0583 12.8584 11.3416 13.0084C11.3833 13.0251 11.4333 13.0501 11.4916 13.0751C11.5583 13.1001 11.625 13.1084 11.7 13.1084C11.8416 13.1084 11.95 13.0584 12.0416 12.9667L12.675 12.3417C12.8833 12.1334 13.0833 11.9751 13.275 11.8751C13.4666 11.7584 13.6583 11.7001 13.8666 11.7001C14.025 11.7001 14.1916 11.7334 14.375 11.8084C14.5583 11.8834 14.75 11.9917 14.9583 12.1334L17.7166 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.6251C18.2583 14.8334 18.3083 15.0417 18.3083 15.2751Z"
                        stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" />
                    </svg>
                    <p>0911098787</p>
                  </div>
                  <div class="flex flex-row gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.3083 15.2751C18.3083 15.5751 18.2416 15.8834 18.1 16.1834C17.9583 16.4834 17.775 16.7667 17.5333 17.0334C17.125 17.4834 16.675 17.8084 16.1666 18.0167C15.6666 18.2251 15.125 18.3334 14.5416 18.3334C13.6916 18.3334 12.7833 18.1334 11.825 17.7251C10.8666 17.3167 9.90829 16.7667 8.95829 16.0751C7.99996 15.3751 7.09163 14.6001 6.22496 13.7417C5.36663 12.8751 4.59163 11.9667 3.89996 11.0167C3.21663 10.0667 2.66663 9.11675 2.26663 8.17508C1.86663 7.22508 1.66663 6.31675 1.66663 5.45008C1.66663 4.88341 1.76663 4.34175 1.96663 3.84175C2.16663 3.33341 2.48329 2.86675 2.92496 2.45008C3.45829 1.92508 4.04163 1.66675 4.65829 1.66675C4.89163 1.66675 5.12496 1.71675 5.33329 1.81675C5.54996 1.91675 5.74163 2.06675 5.89163 2.28341L7.82496 5.00841C7.97496 5.21675 8.08329 5.40841 8.15829 5.59175C8.23329 5.76675 8.27496 5.94175 8.27496 6.10008C8.27496 6.30008 8.21663 6.50008 8.09996 6.69175C7.99163 6.88341 7.83329 7.08341 7.63329 7.28341L6.99996 7.94175C6.90829 8.03341 6.86663 8.14175 6.86663 8.27508C6.86663 8.34175 6.87496 8.40008 6.89163 8.46675C6.91663 8.53341 6.94163 8.58341 6.95829 8.63341C7.10829 8.90841 7.36663 9.26675 7.73329 9.70008C8.10829 10.1334 8.50829 10.5751 8.94163 11.0167C9.39163 11.4584 9.82496 11.8667 10.2666 12.2417C10.7 12.6084 11.0583 12.8584 11.3416 13.0084C11.3833 13.0251 11.4333 13.0501 11.4916 13.0751C11.5583 13.1001 11.625 13.1084 11.7 13.1084C11.8416 13.1084 11.95 13.0584 12.0416 12.9667L12.675 12.3417C12.8833 12.1334 13.0833 11.9751 13.275 11.8751C13.4666 11.7584 13.6583 11.7001 13.8666 11.7001C14.025 11.7001 14.1916 11.7334 14.375 11.8084C14.5583 11.8834 14.75 11.9917 14.9583 12.1334L17.7166 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.6251C18.2583 14.8334 18.3083 15.0417 18.3083 15.2751Z"
                        stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" />
                    </svg>
                    <p>0911098787</p>
                  </div>
                </div>
                <div class="flex flex-col w-1/2">
                  <div class="flex flex-row gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1666 17.0834H5.83329C3.33329 17.0834 1.66663 15.8334 1.66663 12.9167V7.08341C1.66663 4.16675 3.33329 2.91675 5.83329 2.91675H14.1666C16.6666 2.91675 18.3333 4.16675 18.3333 7.08341V12.9167C18.3333 15.8334 16.6666 17.0834 14.1666 17.0834Z"
                        stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5"
                        stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    <p>0955662233</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Forth part -->
          <div class="flex flex-row  justify-between text-[12px] md:text-lg">
            <div class="flex flex-row gap-2 items-center ">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.59999 1.6499V4.1249" stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.2 1.6499V4.1249" stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.8875 7.49927H16.9125" stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M17.325 7.01245V14.025C17.325 16.5 16.0875 18.15 13.2 18.15H6.59999C3.71249 18.15 2.47499 16.5 2.47499 14.025V7.01245C2.47499 4.53745 3.71249 2.88745 6.59999 2.88745H13.2C16.0875 2.88745 17.325 4.53745 17.325 7.01245Z"
                  stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M12.9481 11.3024H12.9555" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M12.9481 13.7775H12.9555" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M9.89627 11.3024H9.90368" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M9.89627 13.7775H9.90368" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M6.8428 11.3024H6.85021" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M6.8428 13.7775H6.85021" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <p class="text-[#171625] font-bold">12 Jan 2024</p>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.65 9.8999C18.65 14.4539 14.954 18.1499 10.4 18.1499C5.84599 18.1499 2.14999 14.4539 2.14999 9.8999C2.14999 5.3459 5.84599 1.6499 10.4 1.6499C14.954 1.6499 18.65 5.3459 18.65 9.8999Z"
                  stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.4607 12.5236L10.9032 10.9973C10.4577 10.7333 10.0947 10.0981 10.0947 9.5783V6.1958"
                  stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-[#171625] font-bold">6:00 PM </p>
            </div>



            <div class="flex flex-row gap-2 items-center ">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.15427 11.8222C7.15427 12.8864 7.97102 13.7444 8.98577 13.7444H11.0565C11.9393 13.7444 12.657 12.9937 12.657 12.0697C12.657 11.0632 12.2198 10.7084 11.568 10.4774L8.24327 9.32242C7.59152 9.09142 7.15427 8.73667 7.15427 7.73017C7.15427 6.80617 7.87202 6.05542 8.75477 6.05542H10.8255C11.8403 6.05542 12.657 6.91342 12.657 7.97767"
                  stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.89996 4.94995V14.85" stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M9.89996 18.1499C14.4563 18.1499 18.15 14.4563 18.15 9.8999C18.15 5.34355 14.4563 1.6499 9.89996 1.6499C5.34361 1.6499 1.64996 5.34355 1.64996 9.8999C1.64996 14.4563 5.34361 18.1499 9.89996 18.1499Z"
                  stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-[#171625] font-bold flex gap-1">
                <!-- Ticket amount -->
                <span>{{ ticketPrice }}</span>
                <span>ETB /ticket</span>
              </p>
            </div>

          </div>
        </div>

        <!-- Second Section - Input fields and pay button -->
        <div class="flex flex-col justify-between w-full md:w-1/2 px-6 md:p-6">

          <div class="flex flex-col gap-6 md:gap-10">
            <!-- Input 1 -->
            <div class="">
              <label for="firstName" class="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" id="firstName" class="w-full px-4 py-2 border rounded-md" placeholder="Abebe Bikila">
            </div>
            <!-- Input 2 -->
            <div>
              <label for="phoneNumber" class="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
              <input type="text" id="phoneNumber" class="w-full px-4 py-2 border rounded-md" placeholder="+251 900000000">
            </div>

            <!-- Input 3 -->
            <div class="relative">
              <label for="numberOfTickets" class="block text-sm font-bold text-gray-700 mb-1">Tickets to Buy</label>
              <div class="flex items-center border border-gray-300 rounded-md">
                <button @click="decrement"
                  class="w-8 md:w-10 h-full py-1 ml-1 flex items-center justify-center bg-[#D3AF35] text-white font-bold rounded-md cursor-pointer focus:outline-none">-</button>
                <input type="number" id="numberOfTickets" v-model="numberOfTickets"
                  class="w-full px-4 py-2 text-center flex-1" min="0">

                <button @click="increment"
                  class="w-8 md:w-10 h-full py-1 mr-1 flex items-center justify-center bg-[#D3AF35] text-white font-bold rounded-md cursor-pointer focus:outline-none">+</button>
              </div>

              <!-- Display amount to pay -->
              <p class="mt-5 flex gap-1 items-center text-sm">
                <span>You’ll be paying</span>
                <span class="font-bold">{{ amount.toFixed(2) }}</span>
                <span>ETB</span>
              </p>
            </div>



            <!-- Select payment method -->
            <div class="flex flex-col gap-4 mt-6 md:mt-0">
              <p class="font-bold text-sm text-gray-700">Choose Payment Method</p>
              <div class="grid grid-cols-3 gap-6 md:flex flex-row">
                <button v-for="(method, index) in banksAndMobiles" :key="index" @click="selectPaymentMethod(method.id)"
                  class="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-xl"
                  :class="{ 'selectedd': selectedPaymentId === method.id }">
                  <img class="cursor-pointer hover:scale-105 rounded-md md:h-[60px] md:w-[60px]" :src="method.image"
                    alt="image" />
                </button>
              </div>
            </div>
          </div>

          <!-- Pay now Button -->
          <button @click="openModal"
            class="bg-[#D3AF35] hover:bg-[#D3AF39] text-white font-bold py-3 px-4 text-xl rounded mt-10 md:mt-0 mb-10 md:mb-0">Pay
            now</button>



        </div>
      </div>




      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <!-- Modal overlay -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-md w-full md:w-3/5 p-6 py-32 overflow-y-auto max-h-full">
          <button @click="closeModal" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              <img src="@/static/qr.png" alt="Image" class="">

              <!-- Download QR Button -->
              <button
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
import { ref } from 'vue';
import telebirrImage from '@/static/telebirr.png';
import cbebirrImage from '@/static/cbebirr.jpg';
import abyssiniaImage from '@/static/abyssinia.jpg';
import amharaImage from '@/static/amhara.png';
import gadaImage from '@/static/gada.jpeg';

const activeTab = ref('aboutEvent');
const numberOfTickets = ref(0);
const selectedPaymentId = ref(null)
// Define the price per ticket
const ticketPrice = 200; // Change this to your actual ticket price


// Define a state variable for modal visibility
const isModalOpen = ref(false);

// Function to open the modal
const openModal = () => {
  isModalOpen.value = true;
};

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false;
};

const increment = () => {
  numberOfTickets.value++;
};

const decrement = () => {
  if (numberOfTickets.value > 0) {
    numberOfTickets.value--;
  }
};

const toggleContent = (tab) => {
  activeTab.value = tab;
};

const selectPaymentMethod = (methodId) => {
  // Logic to handle the selection of payment method
  selectedPaymentId.value = methodId;
};

// Calculate the total amount to pay based on the number of tickets
const amount = computed(() => {
  return numberOfTickets.value * ticketPrice;
});

// Define banks and mobiles data
const banksAndMobiles = ref([
  {
    id: 'telebirr',
    name: 'Telebirr',
    image: telebirrImage,
    category: 'ebirr',
  },
  {
    id: 'cbebirr',
    name: 'Cbe Birr',
    image: cbebirrImage,
    category: 'ebirr',
  },
  {
    id: 'abyssinia',
    name: "Bank of Abyssinia",
    image: abyssiniaImage,
    category: "atm",
  },
  {
    id: 'amhara',
    name: "Amhara Bank",
    image: amharaImage,
    category: "bank",
  },
  {
    id: 'gada',
    name: "Gadaa Bank",
    image: gadaImage,
    category: "bank",
  },
  // Add more payment methods as needed
]);
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


