<template>
  <div>
    <div class="text-center text-3xl">Book</div>

    <form class="mt-10" @submit.prevent>
      <div>
        <Transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <div class="how-it-works mb-10 bg-white shadow-xl rounded-2xl p-4">
            <p class="text-xl font-medium">
              <font-awesome-icon
                icon="lightbulb"
                class="text-yellow-400 mr-1"
              />How it works:
            </p>
            <br />
            <p class="font-light text-base px-2">
              Select your desired
              <span class="font-medium">Subject + Level</span> at the times that
              you prefer and we'll match you with the prefect tutor, just for
              you!
            </p>
          </div>
        </Transition>
      </div>

      <!-- <div class="grid justify-items-start"> -->
      <div>
        <label for="subject" class="text-2xl font-medium">Subject</label>
        <select id="subject" name="subject">
          <option disabled selected>Select</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="English">English</option>
        </select>
      </div>

      <div class="mt-10">
        <label for="level" class="text-2xl font-medium mt-10">Level</label>
        <select id="level" name="level">
          <option disabled selected>Select</option>
          <option value="Primary">Primary</option>
          <option value="KS3">KS3</option>
          <option value="GCSE">GCSE</option>
          <option value="A-Levels">A-Levels</option>
        </select>
      </div>
      <!-- </div> -->

      <div class="text-2xl font-medium mt-14">Availability</div>
      <div class="availability overflow-auto">
        <table class="table-auto mt-5">
          <thead>
            <tr>
              <th></th>
              <th class="text-lg pr-2">
                Morning
                <span>(9AM-12PM)</span>
              </th>
              <th class="text-lg px-2">
                Afternoon
                <span>(1PM-4PM)</span>
              </th>
              <th class="text-lg px-2">
                Evening
                <span>(5PM-9PM)</span>
              </th>
            </tr>
          </thead>
          <tbody class="text-left">
            <tr>
              <th>Monday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Friday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
              <td class="text-center">
                <input
                  v-model="timesOfAvailability"
                  type="checkbox"
                  value="MON-MORNING"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        class="btn w-full bg-amber-400 h-12 mt-10 text-gray-800"
        @click="matchMe"
      >
        <font-awesome-icon icon="search" class="mr-2" />Match Me
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";

function matchMe() {
  useToast().info("Feature coming soon!", { timeout: 5000 });
}
// function matchMe () {
// 	if (this.$loggedIn) {
// 		console.log("Booking...");
// 	} else {
// 		this.redirectToLogin();
// 	}
// }

// function redirectToLogin () {
// 	this.$showModal({
// 		title: "Final step",
// 		body: "You need to sign in before you continue.",
// 	});
// 	// this.$router.push({ name: "Login" });
// 	console.log("redirecting to login...");
// }

function displayLoginModal() {}
</script>

<style scoped>
.how-it-works {
  --animate-duration: 0.5s;
}

td input {
  @apply h-5 w-5 my-3;
}

tbody tr th {
  @apply text-lg;
}

thead tr {
  /* @apply bg-green-200; */
}

/* thead tr th {
	@apply text-lg px-2;
} */

thead tr th span {
  @apply text-xs;
}

select {
  @apply px-4 py-3 mt-3 text-xl bg-white rounded-md w-full focus:outline-none shadow;
}
</style>
