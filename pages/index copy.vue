<template>
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-md w-full md:w-3/5"> <!-- Adjusted width to 3/5 of the screen -->
            <div class="flex flex-col md:flex-row md:gap-6 space-y-4 md:space-y-0 md:space-x-4">

                <!-- First Section - Image, Title, and Description and others-->
                <div class="flex flex-col gap-6 w-full md:w-1/2 p-6">
                    <!-- First part - image -->
                    <img src="~/assets/img/Cover.jpeg" alt="Image" class="w-full md:h-80 rounded-sm mb-4 md:mr-4">

                    <!-- Second part - Title and Description -->
                    <div class="flex flex-col gap-1">
                        <!-- Title -->
                        <!-- <h2 class="text-xl font-bold">{{ eventDetails && eventDetails.name }}</h2>    -->
                        <h2 class="text-2xl font-bold">ዶልፊን ሚካኤል vs ዴንዜል ኦኒያንጎ</h2>

                        <!-- Description -->
                        <div class="flex gap-4 items-center">
                            <!-- <p class="text-gray-600">by Tilet media & commuication</p>   -->
                            <p class="text-gray-600">በሶሎ ኢንተርናሽናል</p>
                            <!-- <p class="text-gray-600">by {{ eventDetails && eventDetails.name }}</p> -->

                            <p
                                class="px-3 py-[2px] bg-yellow-500 bg-opacity-20 rounded-xl text-[#D3AF35] font-bold text-sm border border-[#D3AF35]">

                                <span>{{ calculateDaysLeft('2024-03-24T15:00:00+03:00') }}</span>
                                <span
                                    v-if="calculateDaysLeft('2024-03-24T07:15:00+03:00') != 'Today' && calculateDaysLeft('2024-03-24T15:00:00+03:00') != 'Now' && calculateDaysLeft('2024-03-24T15:00:00+03:00') != 'Concluded'">
                                    ቀን ቀረዉ</span>

                            </p>


                        </div>
                    </div>

                    <!-- Third part - Toggleable content -->
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-row gap-6 md:gap-10 text-[18px]">
                            <button @click="toggleContent('aboutEvent')"
                                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'aboutEvent', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'aboutEvent' }">
                                ስለ ዝግጅቱ</button>
                            <button @click="toggleContent('eventLocation')"
                                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'eventLocation', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'eventLocation' }">አድራሻ
                            </button>
                            <button @click="toggleContent('contact')"
                                :class="{ 'text-[#D3AF35] underline text-[16px] md:text-[20px]': activeTab === 'contact', 'text-[#818181] text-[16px] md:text-[20px] hover:underline focus:outline-none': activeTab !== 'contact' }">ስልክ</button>
                        </div>

                        <!-- Render dynamic content based on selected tab -->
                        <div class="text-justify text-[15px] md:text-lg" v-if="activeTab === 'aboutEvent'">
                            <!-- <p class="">{{ eventDetails && eventDetails.desc }}</p> -->
                            <p>ኢንተርናሽናል ፕሮፌሽናል ቦክሲንግ ምሽት </p>
                        </div>
                        <div class="text-justify text-[15px] md:text-lg" v-else-if="activeTab === 'eventLocation'">
                            <p>አዲስ አበባ፡ ኢትዮጵያ መወዳደሪያ አዳራሽ ፡ አድዋ 00 </p>
                        </div>
                        <div class="text-justify text-[15px] md:text-lg" v-else-if="activeTab === 'contact'">
                            <div class="flex w-full my-2 gap-6">
                                <div class="flex flex-col gap-2 ">
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.3083 15.2751C18.3083 15.5751 18.2416 15.8834 18.1 16.1834C17.9583 16.4834 17.775 16.7667 17.5333 17.0334C17.125 17.4834 16.675 17.8084 16.1666 18.0167C15.6666 18.2251 15.125 18.3334 14.5416 18.3334C13.6916 18.3334 12.7833 18.1334 11.825 17.7251C10.8666 17.3167 9.90829 16.7667 8.95829 16.0751C7.99996 15.3751 7.09163 14.6001 6.22496 13.7417C5.36663 12.8751 4.59163 11.9667 3.89996 11.0167C3.21663 10.0667 2.66663 9.11675 2.26663 8.17508C1.86663 7.22508 1.66663 6.31675 1.66663 5.45008C1.66663 4.88341 1.76663 4.34175 1.96663 3.84175C2.16663 3.33341 2.48329 2.86675 2.92496 2.45008C3.45829 1.92508 4.04163 1.66675 4.65829 1.66675C4.89163 1.66675 5.12496 1.71675 5.33329 1.81675C5.54996 1.91675 5.74163 2.06675 5.89163 2.28341L7.82496 5.00841C7.97496 5.21675 8.08329 5.40841 8.15829 5.59175C8.23329 5.76675 8.27496 5.94175 8.27496 6.10008C8.27496 6.30008 8.21663 6.50008 8.09996 6.69175C7.99163 6.88341 7.83329 7.08341 7.63329 7.28341L6.99996 7.94175C6.90829 8.03341 6.86663 8.14175 6.86663 8.27508C6.86663 8.34175 6.87496 8.40008 6.89163 8.46675C6.91663 8.53341 6.94163 8.58341 6.95829 8.63341C7.10829 8.90841 7.36663 9.26675 7.73329 9.70008C8.10829 10.1334 8.50829 10.5751 8.94163 11.0167C9.39163 11.4584 9.82496 11.8667 10.2666 12.2417C10.7 12.6084 11.0583 12.8584 11.3416 13.0084C11.3833 13.0251 11.4333 13.0501 11.4916 13.0751C11.5583 13.1001 11.625 13.1084 11.7 13.1084C11.8416 13.1084 11.95 13.0584 12.0416 12.9667L12.675 12.3417C12.8833 12.1334 13.0833 11.9751 13.275 11.8751C13.4666 11.7584 13.6583 11.7001 13.8666 11.7001C14.025 11.7001 14.1916 11.7334 14.375 11.8084C14.5583 11.8834 14.75 11.9917 14.9583 12.1334L17.7166 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.6251C18.2583 14.8334 18.3083 15.0417 18.3083 15.2751Z"
                                                stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" />
                                        </svg>
                                        <!-- <p>{{ eventDetails && eventDetails.contact }}</p> -->
                                        <p>0902153315</p>
                                    </div>


                                </div>
                                <div class="flex flex-col gap-2 ">
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.3083 15.2751C18.3083 15.5751 18.2416 15.8834 18.1 16.1834C17.9583 16.4834 17.775 16.7667 17.5333 17.0334C17.125 17.4834 16.675 17.8084 16.1666 18.0167C15.6666 18.2251 15.125 18.3334 14.5416 18.3334C13.6916 18.3334 12.7833 18.1334 11.825 17.7251C10.8666 17.3167 9.90829 16.7667 8.95829 16.0751C7.99996 15.3751 7.09163 14.6001 6.22496 13.7417C5.36663 12.8751 4.59163 11.9667 3.89996 11.0167C3.21663 10.0667 2.66663 9.11675 2.26663 8.17508C1.86663 7.22508 1.66663 6.31675 1.66663 5.45008C1.66663 4.88341 1.76663 4.34175 1.96663 3.84175C2.16663 3.33341 2.48329 2.86675 2.92496 2.45008C3.45829 1.92508 4.04163 1.66675 4.65829 1.66675C4.89163 1.66675 5.12496 1.71675 5.33329 1.81675C5.54996 1.91675 5.74163 2.06675 5.89163 2.28341L7.82496 5.00841C7.97496 5.21675 8.08329 5.40841 8.15829 5.59175C8.23329 5.76675 8.27496 5.94175 8.27496 6.10008C8.27496 6.30008 8.21663 6.50008 8.09996 6.69175C7.99163 6.88341 7.83329 7.08341 7.63329 7.28341L6.99996 7.94175C6.90829 8.03341 6.86663 8.14175 6.86663 8.27508C6.86663 8.34175 6.87496 8.40008 6.89163 8.46675C6.91663 8.53341 6.94163 8.58341 6.95829 8.63341C7.10829 8.90841 7.36663 9.26675 7.73329 9.70008C8.10829 10.1334 8.50829 10.5751 8.94163 11.0167C9.39163 11.4584 9.82496 11.8667 10.2666 12.2417C10.7 12.6084 11.0583 12.8584 11.3416 13.0084C11.3833 13.0251 11.4333 13.0501 11.4916 13.0751C11.5583 13.1001 11.625 13.1084 11.7 13.1084C11.8416 13.1084 11.95 13.0584 12.0416 12.9667L12.675 12.3417C12.8833 12.1334 13.0833 11.9751 13.275 11.8751C13.4666 11.7584 13.6583 11.7001 13.8666 11.7001C14.025 11.7001 14.1916 11.7334 14.375 11.8084C14.5583 11.8834 14.75 11.9917 14.9583 12.1334L17.7166 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.6251C18.2583 14.8334 18.3083 15.0417 18.3083 15.2751Z"
                                                stroke="#171625" stroke-width="1.5" stroke-miterlimit="10" />
                                        </svg>
                                        <!-- <p>{{ eventDetails && eventDetails.contact }}</p> -->
                                        <p>0902153315</p>
                                    </div>


                                </div>
                                <div v-if="eventDetails && eventDetails.contact" class="flex flex-col w-1/2">
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.1666 17.0834H5.83329C3.33329 17.0834 1.66663 15.8334 1.66663 12.9167V7.08341C1.66663 4.16675 3.33329 2.91675 5.83329 2.91675H14.1666C16.6666 2.91675 18.3333 4.16675 18.3333 7.08341V12.9167C18.3333 15.8334 16.6666 17.0834 14.1666 17.0834Z"
                                                stroke="#171625" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5"
                                                stroke="#171625" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>{{ eventDetails && eventDetails.contact }}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Forth part -->
                    <div class="flex flex-row gap-10 md:gap-16 text-[12px] md:text-lg">
                        <div class="flex flex-row gap-2 items-center ">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.59999 1.6499V4.1249" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.2 1.6499V4.1249" stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.8875 7.49927H16.9125" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M17.325 7.01245V14.025C17.325 16.5 16.0875 18.15 13.2 18.15H6.59999C3.71249 18.15 2.47499 16.5 2.47499 14.025V7.01245C2.47499 4.53745 3.71249 2.88745 6.59999 2.88745H13.2C16.0875 2.88745 17.325 4.53745 17.325 7.01245Z"
                                    stroke="#D3AF35" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12.9481 11.3024H12.9555" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.9481 13.7775H12.9555" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.89627 11.3024H9.90368" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.89627 13.7775H9.90368" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.8428 11.3024H6.85021" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.8428 13.7775H6.85021" stroke="#D3AF35" stroke-width="1.1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <!-- <p class="text-[#171625] font-bold">{{ formatDate(eventDetails && eventDetails.time) }}</p> -->
                            <p class="text-[#171625] font-bold">መጋቢት 15, 2016</p>
                        </div>

                        <div class="flex flex-row gap-2 items-center">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.65 9.8999C18.65 14.4539 14.954 18.1499 10.4 18.1499C5.84599 18.1499 2.14999 14.4539 2.14999 9.8999C2.14999 5.3459 5.84599 1.6499 10.4 1.6499C14.954 1.6499 18.65 5.3459 18.65 9.8999Z"
                                    stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M13.4607 12.5236L10.9032 10.9973C10.4577 10.7333 10.0947 10.0981 10.0947 9.5783V6.1958"
                                    stroke="#D3AF35" stroke-width="1.1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <!-- <p class="text-[#171625] font-bold">{{ formatTime(eventDetails && eventDetails.time) }} </p> -->
                            <p class="text-[#171625] font-bold">9 ከሰዓት </p>

                        </div>





                    </div>
                </div>

                <!-- Second Section - Input fields and pay button -->
                <div class="flex flex-col justify-between w-full md:w-1/2 px-6 md:p-6">

                    <div class="flex flex-col gap-6 md:gap-10">
                        <!-- Input 1 -->
                        <div class="">
                            <label for="firstName" class="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="firstName" class="w-full px-4 py-2 border rounded-md"
                                placeholder="Abebe Bikila">
                        </div>
                        <!-- Input 2 -->
                        <div>
                            <label for="phoneNumber" class="block text-sm font-bold text-gray-700 mb-1">Phone
                                Number</label>
                            <input v-model="phoneNumber" @input="validatePhoneNumber" type="text" id="phoneNumber"
                                class="w-full px-4 py-2 border rounded-md" :class="{
                                    valid: isValidPhoneNumber,
                                    invalid: !isValidPhoneNumber,
                                }" placeholder="Enter your phone number (09...)">
                        </div>

                        <!-- Input 3 -->
                        <div>



                            <!-- <div class="flex gap-10">
                                <button @click="selectButton(30000)"
                                    :class="{ 'border border-black]': selectedButton === 30000 }"
                                    class="px-3 py-2 text-white bg-[#D3AF35] border-black text-sm rounded-md">30,000</button>
                                <button @click="selectButton(20000)"
                                    :class="{ 'border border-black]': selectedButton === 20000 }"
                                    class="px-3 py-2 text-white bg-[#D3AF35] border-black text-sm rounded-md">20,000</button>
                                <button @click="selectButton(10000)"
                                    :class="{ 'border border-black]': selectedButton === 10000 }"
                                    class="px-3 py-2 text-white bg-[#D3AF35] border-black text-sm rounded-md">10,000</button>
                            </div> -->

                            <div class="flex gap-10">
    <label class="flex items-center gap-2">
        <input type="radio" v-model="selectedButton" value="30000" class="custom-radio">
        <span class="hidden md:inline">VVIP - </span>
        <span>30,000</span>

    </label>
    <label class="flex items-center gap-2">
        <input type="radio" v-model="selectedButton" value="20000" class="custom-radio">
        <span class="hidden md:inline">VIP -</span>
        <span>20,000</span>

    </label>
    <label class="flex items-center gap-2">
        <input type="radio" v-model="selectedButton" value="10000" class="custom-radio">
        <span class="hidden md:inline">Regular -</span>
        <span>10,000</span>

    </label>
</div>



<!-- <div class="flex gap-10">
    <label class="label-container">
        <input type="radio" v-model="selectedButton" value="30000" class="custom-radio">
        <span>VVIP</span>
        <span>30,000</span>
    </label>
    <label class="label-container">
        <input type="radio" v-model="selectedButton" value="20000" class="custom-radio">
        <span>VIP</span>
        <span>20,000</span>
    </label>
    <label class="label-container">
        <input type="radio" v-model="selectedButton" value="10000" class="custom-radio">
        <span>Regular</span>
        <span>10,000</span>
    </label>
</div> -->



                            <!-- Display amount to pay -->
                            <p class="mt-6 md:mt-8 flex gap-1 items-center text-sm">
                                <span>You’ll be paying</span>
                                <span class="font-bold">{{ amount.toFixed(2) }}</span>
                                <span>ETB</span>
                            </p>




                        </div>



                        <!-- Input 4 -->
                        <div class="relative">
                            <label for="numberOfTickets" class="block text-sm font-bold text-gray-700 mb-1">Tickets to
                                Buy</label>
                            <div class="flex items-center border border-gray-300 rounded-md">
                                <button @click="decrement"
                                    class="w-8 md:w-10 h-full py-1 ml-1 flex items-center justify-center bg-[#D3AF35] text-white font-bold rounded-md cursor-pointer focus:outline-none">-</button>
                                <input type="number" id="numberOfTickets" v-model="numberOfTickets"
                                    class="w-full px-4 py-2 text-center flex-1" min="1">

                                <button @click="increment"
                                    class="w-8 md:w-10 h-full py-1 mr-1 flex items-center justify-center bg-[#D3AF35] text-white font-bold rounded-md cursor-pointer focus:outline-none">+</button>
                            </div>


                        </div>

                    </div>

                    <!-- Pay now Button -->
                    <button @click="pay" :disabled="!isValidPhoneNumber"
                        class="bg-[#D3AF35] hover:bg-[#D3AF39] text-white font-bold py-3 px-4 text-xl rounded mt-10 md:mt-0 mb-10 md:mb-0">
                        <!-- Pay now -->
                        <div v-if="isLoading" class="flex justify-center items-center gap-2">
                            <svg aria-hidden="true"
                                class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white dark:fill-gray-300"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                            Processing...
                        </div>
                        <span v-else>
                            Pay now
                        </span>

                    </button>



                </div>
            </div>


        </div>

        <!-- Modal -->
        <div v-if="showInitiatePaymentModal" class="fixed inset-0 flex items-center justify-center z-50">
            <!-- Modal overlay -->
            <div class="absolute inset-0 bg-black opacity-50"></div>

            <!-- Modal content -->
            <div
                class="relative bg-white rounded-lg shadow-md w-full md:w-4/5 p-6 py-32 overflow-y-auto h-full md:h-[700px]">
                <button @click="closeModal" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- iframe to display payment link -->
                <!-- <iframe :src="paymentLink" class="w-full h-full"></iframe> -->
                <iframe :src="paymentLink" class="w-full h-full iframe-no-scroll"
                    style="overflow: hidden; border: none;"></iframe>



            </div>


        </div>


        <!-- Display error message -->
        <p v-if="showErrorMessage"
            class="p-6 md:p-0 fixed bottom-[-15px] md:bottom-[20px] rounded-lg font-bold text-red-900 text-[13px] md:text-xl">
            Tickets will be available starting from tomorrow
        </p>




    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
const activeTab = ref('aboutEvent');
const paymentReason = ref('payment for event')
const numberOfTickets = ref(1);
const selectedPaymentId = ref(null)
// const ticketPrice = ref(400); // Change this to your actual ticket price
const eid = ref(null)
const phoneNumber = ref('');
const isValidPhoneNumber = ref(false);
const showInitiatePaymentModal = ref(false);
const paymentLink = ref(null);
const isLoading = ref(false);

const showErrorMessage = ref(false);
const errorMessage = ref('Tickets will be available starting from tomorrow');

const isModalOpen = ref(false);
const eventDetails = ref(null);
// const daysLeft = ref(null);


// Function to format the date
const formatDate = (dateString) => {
    const date = new Date('2024-03-10 11:14:00 +0000 UTC');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// Function to format the time
const formatTime = (dateString) => {
    const date = new Date('2024-03-10 14:00:00 +0000 UTC');
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};


const ticketPrice = ref(30000); // Default ticket price
const selectedButton = ref(30000);

// const updateTicketPrice = (price) => {
//     ticketPrice.value = price;
// };



const selectButton = (price) => {
    selectedButton.value = price;
    updateTicketPrice(price);
};



const updateTicketPrice = () => {
    if (selectedButton.value === '30000') {
        ticketPrice.value = 30000;
    } else if (selectedButton.value === '20000') {
        ticketPrice.value = 20000;
    } else if (selectedButton.value === '10000') {
        ticketPrice.value = 10000;
    }
};

watch(selectedButton, () => {
    updateTicketPrice();
});




const daysLeft = ref(null);
const timePhrase = ref(null);

// const calculateDaysLeft = () => {
//     const eventDate = new Date('2024-03-10T22:00:00+03:00');
//     const currentDate = new Date();
//     const differenceInTime = eventDate.getTime() - currentDate.getTime();
//     const differenceInHours = differenceInTime / (1000 * 3600);
//     const daysLeftValue = Math.floor(differenceInHours / 24); // Number of full days left
//     const remainingHours = Math.ceil(differenceInHours % 24); // Remaining hours

//     console.log('differenceInTime', differenceInTime)
//     console.log('differenceInHours', differenceInHours)
//     console.log('daysLeftValue', daysLeftValue)
//     console.log('remainingHours', remainingHours)

//     if (daysLeftValue <= 0 && remainingHours >= 0 && remainingHours < 24) {
//         daysLeft.value = 'Today';
//     } else if (daysLeftValue < 0) {
//         daysLeft.value = 'Now';
//     } else {
//         daysLeft.value = daysLeftValue;
//     }
// };



const calculateDaysLeft = (daysLeft) => {
    // const eventDate = new Date('2024-03-09T15:00:00+03:00');
    const eventDate = new Date(daysLeft);

    const currentDate = new Date();
    const differenceInTime = eventDate.getTime() - currentDate.getTime();
    const differenceInHours = differenceInTime / (1000 * 3600);
    const daysLeftValue = Math.floor(differenceInHours / 24); // Number of full days left
    const remainingHours = Math.ceil(differenceInHours % 24); // Remaining hours
    // console.log(daysLeftValue)
    // console.log(remainingHours)
    if (daysLeftValue <= 0 && remainingHours >= 0 && remainingHours < 9) {
        return 'Today'
    }
    else if (daysLeftValue <= 0 && remainingHours >= 9 && remainingHours <= 24) {
        return 1
    }
    else if (daysLeftValue < 0 && remainingHours >= -6) {
        return 'Now'
    }
    else if (daysLeftValue <= 0 && remainingHours <= -6) {
        return 'Concluded'

    }
    else {
        if (remainingHours >= 12) {
            return daysLeftValue
            // daysLeft.value = daysLeftValue + 1; // Approximate to the higher value
        } else {
            return daysLeftValue
            // daysLeft.value = daysLeftValue; // Approximate to the lower value
        }
    }
};


const determineTimePhrase = () => {
    const eventDate = new Date('2024-03-10T15:00:00+03:00');
    const currentDate = new Date();
    const differenceInHours = Math.ceil((eventDate.getTime() - currentDate.getTime()) / (1000 * 3600));
    if (differenceInHours <= 8) {
        return 'Today';
    } else if (differenceInHours < 1) {
        return 'Now';
    } else {
        return null;
    }
};

// Call functions to initialize values
calculateDaysLeft();
timePhrase.value = determineTimePhrase();



const pay = async () => {
    // showErrorMessage.value = true; // Show error message
    isLoading.value = true

    const data = {
        ticket_id: ticketPrice.value === 30000 ? '245f618a-db8a-4b55-a707-67b83a29086e' : '402085c1-05d4-4779-b95a-2c51e068b51d',
        quantity: numberOfTickets.value,
        phone: phoneNumber.value
    }
    // console.log(data)

    await axios.post('https://eventapi.santim.io/api/v2/buy-ticket', data)
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                // console.log(response.data.data)
                paymentLink.value = response.data.data
                // console.log(paymentLink.value)
                // showInitiatePaymentModal.value = true
                // console.log(paymentLink.value);
                // Open payment link in a new tab
                // window.open(paymentLink.value, '_blank');

                // Redirect to payment link in the same tab
                window.location.href = paymentLink.value;
                isLoading.value = false

            }
        })
        .catch(error => {
            console.error('Error fetching event details:', error);
            isLoading.value = false
        });


    // Automatically hide the error message after 5 seconds
    setTimeout(() => {
        showErrorMessage.value = false;
    }, 10000);
};

const validatePhoneNumber = () => {
    const validationRegex = /((^(\+251|0)\d{9}))/;
    if (
        phoneNumber.value.match(validationRegex) &&
        phoneNumber.value !== null &&
        phoneNumber.value !== "" &&
        phoneNumber.value.length < 14 &&
        phoneNumber.value.length > 9
    ) {
        if (phoneNumber.value.substr(0, 1) === "0") {
            phoneNumber.value = "+251" + phoneNumber.value.substr(1);
        }
        isValidPhoneNumber.value = true;
        // console.log(isValidPhoneNumber.value)
    } else {
        isValidPhoneNumber.value = false;
        // console.log(isValidPhoneNumber.value)
    }
};

const clearErrorMessage = () => {
    errorMessage.value = '';
};

const closeModal = () => {
    showInitiatePaymentModal.value = false;
};

const increment = () => {
    numberOfTickets.value++;
};

const decrement = () => {
    if (numberOfTickets.value > 1) {
        numberOfTickets.value--;
    }
};

const handleTicketPriceChange = (e) => {
    ticketPrice.value = parseInt(e.target.value);
}

const toggleContent = (tab) => {
    activeTab.value = tab;
};

const selectPaymentMethod = (methodId) => {
    selectedPaymentId.value = methodId;
};

const amount = computed(() => {
    return numberOfTickets.value * ticketPrice.value;
});

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

.selectedd {
    border: 4px solid rgb(211, 175, 14);
    /* transition: all 0.1s ease-in-out; */
}

.invalid {
    border: 1px solid rgb(133, 4, 4);
}

.valid {
    border: 1px solid green;
}

.iframe-no-scroll {
    overflow: hidden;
}

input[type="radio"].custom-radio {
    /* Hide the default radio button */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Define the size of the custom radio button */
    width: 20px;
    height: 20px;
    /* Add custom border and background */
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #fff;
    /* Center the custom radio button */
    display: inline-block;
    vertical-align: middle;
    position: relative;
}

/* Define styles for the radio button when it's selected */
input[type="radio"].custom-radio:checked {
    /* Change the background color when selected */
    background-color: #D3AF35; /* Change this to your desired color */
    /* You can also change other styles like border color or box-shadow */
}


/* Styles for labels */
.label-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

/* Adjustments for small devices */
@media (max-width: 768px) {
    .label-container {
        flex-direction: row;
        align-items: center;
    }
    .label-container label {
        margin-right: 10px;
    }

    input[type="radio"].custom-radio {

    width: 17px;
    height: 17px;

}
}

/* Hide the label on small devices */
.label-container .vip-label {
    display: none;
}

/* Adjustments for small devices */
@media (min-width: 769px) {
    .label-container .vip-label {
        display: inline;
    }
}
/* Additional styles as needed */
</style>