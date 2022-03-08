<template>
	<div>
		<div class="text-center text-3xl">Book</div>

		<form @submit.prevent class="mt-10">
			<Transition enter-active-class="animated fadeInLeft" appear>
				<div class="how-it-works mb-10 bg-white shadow-xl rounded-2xl p-4">
					<p class="text-xl font-medium">
						<i class="fas fa-lightbulb text-yellow-400 mr-1"></i> How it works:
					</p>
					<br />
					<p class="font-light text-base px-2">
						Select your desired
						<span class="font-medium">Subject + Level</span> at the times that
						you prefer and we'll match you with the prefect tutor, just for you!
					</p>
				</div>
			</Transition>

			<label for="subject" class="text-2xl font-medium">Subject</label>
			<select name="subject" id="subject">
				<option disabled selected>Select</option>
				<option value="Maths">Maths</option>
				<option value="Physics">Physics</option>
				<option value="Chemistry">Chemistry</option>
				<option value="Biology">Biology</option>
				<option value="English">English</option>
			</select>

			<label for="level" class="text-2xl font-medium mt-10">Level</label>
			<select name="level" id="level">
				<option disabled selected>Select</option>
				<option value="Primary">Primary</option>
				<option value="KS3">KS3</option>
				<option value="GCSE">GCSE</option>
				<option value="A-Levels">A-Levels</option>
			</select>

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
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Tuesday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Wednesday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Thursday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Friday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Saturday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
						<tr>
							<th>Sunday</th>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
							<td class="text-center">
								<input type="checkbox" v-model="timesOfAvailability" value="MON-MORNING" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<button class="btn w-full bg-amber-400 h-12 mt-10 text-gray-800" @click="matchMe">
				<i class="fas fa-search"></i>
				Match Me
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">
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

function displayLoginModal () { }
</script>

<style scoped>
.how-it-works {
	--animate-duration: 0.5s;
}

select {
	@apply mt-2 p-3 w-80 rounded-md text-xl focus:outline-none shadow;
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
</style>
