<script lang="ts">
	import LeftToolbarItem from "./LeftToolbarItemRow.svelte";

	const items: LeftToolbarItem[] = [
		{
			icon: "",
			label: "Home",
			path: "/"
		},
		{
			icon: "",
			label: "Cameras",
			path: "/cameras"
		},
		{
			icon: "",
			label: "Locations",
			path: "/locations"
		}
	];
</script>

<div class="bg-grey-grey- border-grey-grey-900 relative flex flex-col border-r-2">
	<div class="hover:bg-brand mb-6 flex cursor-pointer flex-col py-6">
		<div class="relative flex flex-row justify-start gap-3">
			<div class="relative flex h-[60px] w-[60px] shrink-0 flex-row items-start justify-start gap-[7.51px]">
				<img class="border-grey-grey-900 relative flex-1 self-stretch rounded-[50%] border-[0.75px] border-solid" src="photo0.png" />
			</div>
			<div class="relative flex flex-1 flex-col items-start justify-start gap-0">
				<div class="text-grey-grey-200 relative flex items-end justify-start self-stretch text-left" style="font: 400 14px/22px 'NotoSans-Regular', sans-serif">Welcome home,</div>
				<div class="text-grey-white relative flex items-end justify-start self-stretch text-left" style="font: 600 18px/26px 'NotoSans-SemiBold', sans-serif">Kristin</div>
			</div>
		</div>
	</div>
	<div class="relative flex flex-1 flex-col items-start justify-start gap-20">
		<div class="relative flex flex-1 flex-col items-start justify-start gap-12 self-stretch">
			<div class="relative flex shrink-0 flex-col items-start justify-start gap-4 self-stretch">
				{#each items as item}
					<LeftToolbarItem {item} />
				{/each}
			</div>
		</div>
	</div>
	<div class="">
		<svg
			class="relative h-0 shrink-0 self-stretch overflow-visible"
			style="transform: translate(-0.75px, -0.75px)"
			width="221"
			height="2"
			viewBox="0 0 221 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75L1 0.25ZM1 1.75L221 1.75001L221 0.25001L1 0.25L1 1.75Z" fill="#39434F" />
		</svg>

		<div
			class="relative flex shrink-0 flex-row items-center justify-start gap-2 self-stretch rounded-[14px] p-3"
			style="
          box-shadow: var(
            --shadow-button-light-shadow-back-button-box-shadow,
            0px 4px 20px -2px rgba(50, 50, 71, 0.02),
            0px 0px 2px 0px rgba(12, 26, 75, 0.05)
          );
        "
		>
			<svg class="relative h-[22px] w-[22px] shrink-0 overflow-visible" style="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6 16.9954C6.19095 16.3701 6.58167 15.8219 7.1142 15.4323C7.64673 15.0427 9.2927 14.8324 9.95628 14.8326H13.0422C13.7066 14.8323 15.3534 15.0432 15.8863 15.4337C16.4192 15.8242 16.8098 16.3735 17 17M13.8137 10.2775C13.8137 11.5354 12.7775 12.555 11.4993 12.555C10.221 12.555 9.18483 11.5354 9.18483 10.2775C9.18483 9.01968 10.221 8 11.4993 8C12.7775 8 13.8137 9.01968 13.8137 10.2775Z"
					stroke="#D9DFE6"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.94389 9.65886C1.3623 8.42215 2.50831 5.89423 4.48077 6.26874C4.77706 6.32508 5.08246 6.31066 5.37211 6.22667C5.66177 6.14267 5.92751 5.99147 6.14769 5.78537C6.36786 5.57926 6.53627 5.32408 6.63919 5.04059C6.74211 4.75711 6.77663 4.45332 6.73996 4.15397C6.49659 2.16125 9.09439 1.18327 10.2256 2.84287C10.3953 3.09194 10.6214 3.29746 10.8855 3.44271C11.1495 3.58796 11.4442 3.66885 11.7454 3.67881C12.0466 3.68877 12.3459 3.62751 12.619 3.50002C12.8921 3.37253 13.1313 3.18239 13.317 2.94508C14.5537 1.36348 17.0817 2.5095 16.7072 4.48196C16.6508 4.77825 16.6652 5.08365 16.7492 5.37331C16.8332 5.66296 16.9844 5.9287 17.1905 6.14888C17.3966 6.36906 17.6518 6.53746 17.9353 6.64038C18.2188 6.7433 18.5226 6.77782 18.8219 6.74115C20.8146 6.49778 21.7926 9.09558 20.133 10.2268C19.8839 10.3965 19.6784 10.6226 19.5332 10.8867C19.3879 11.1507 19.307 11.4454 19.2971 11.7466C19.2871 12.0478 19.3484 12.3471 19.4759 12.6202C19.6034 12.8933 19.7935 13.1324 20.0308 13.3182C21.6124 14.5549 20.4664 17.0828 18.4939 16.7083C18.1976 16.652 17.8922 16.6664 17.6026 16.7504C17.3129 16.8344 17.0472 16.9856 16.827 17.1917C16.6068 17.3978 16.4384 17.653 16.3355 17.9365C16.2326 18.22 16.1981 18.5238 16.2347 18.8231C16.4781 20.8158 13.8803 21.7938 12.7491 20.1342C12.5794 19.8851 12.3533 19.6796 12.0892 19.5344C11.8251 19.3891 11.5305 19.3082 11.2293 19.2983C10.9281 19.2883 10.6288 19.3496 10.3557 19.4771C10.0826 19.6045 9.84344 19.7947 9.65767 20.032C8.42096 21.6136 5.89304 20.4676 6.26755 18.4951C6.32389 18.1988 6.30947 17.8934 6.22548 17.6038C6.14148 17.3141 5.99028 17.0484 5.78418 16.8282C5.57807 16.608 5.32289 16.4396 5.0394 16.3367C4.75592 16.2338 4.45213 16.1993 4.15278 16.2359C2.16005 16.4793 1.18208 13.8815 2.84168 12.7503C3.91574 12.0172 3.96586 10.4589 2.94389 9.65886Z"
					stroke="#D9DFE6"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<div class="text-grey-grey-200 relative flex items-end justify-start text-left" style="font: 500 16px/22px 'NotoSans-Medium', sans-serif">Profile &amp; Settings</div>
		</div>
		<div
			class="relative flex shrink-0 flex-row items-center justify-start gap-2 self-stretch rounded-[14px] p-3"
			style="
        box-shadow: var(
          --shadow-button-light-shadow-back-button-box-shadow,
          0px 4px 20px -2px rgba(50, 50, 71, 0.02),
          0px 0px 2px 0px rgba(12, 26, 75, 0.05)
        );
      "
		>
			<svg class="relative h-[22px] w-[22px] shrink-0 overflow-visible" style="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.8333 7.33332V5.49999C12.8333 5.01376 12.6402 4.54744 12.2964 4.20363C11.9525 3.85981 11.4862 3.66666 11 3.66666H4.58333C4.0971 3.66666 3.63079 3.85981 3.28697 4.20363C2.94315 4.54744 2.75 5.01376 2.75 5.49999V16.5C2.75 16.9862 2.94315 17.4525 3.28697 17.7964C3.63079 18.1402 4.0971 18.3333 4.58333 18.3333H11C11.4862 18.3333 11.9525 18.1402 12.2964 17.7964C12.6402 17.4525 12.8333 16.9862 12.8333 16.5V14.6667M6.41667 11H19.25M19.25 11L16.5 8.24999M19.25 11L16.5 13.75"
					stroke="#B3BECD"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<div class="text-grey-grey-300 relative flex items-end justify-start text-left" style="font: 500 16px/22px 'NotoSans-Medium', sans-serif">Log out</div>
		</div>
	</div>
</div>
