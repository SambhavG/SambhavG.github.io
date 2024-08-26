<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	export let name = 'CourseCorrect';
	export let description = 'Default Description';
	export let image = 'https://via.placeholder.com/150';
	export let link = 'https://www.google.com';
</script>

<div
	class="group relative z-10 h-20 w-full overflow-hidden rounded-[1.76rem] border-4 border-slate-400 transition-all duration-300 ease-in-out hover:h-[10.5rem]"
>
	<img
		src={image}
		alt={name}
		class="absolute inset-0 z-20 h-full w-full object-cover object-center brightness-[.4] filter transition-all duration-300 ease-in-out group-hover:brightness-[.7]"
	/>
	<div class="relative z-30 flex h-full w-full flex-col justify-between p-4">
		<div class="flex-grow">
			<h2 class="title-text text-left text-3xl font-semibold text-white">
				{name}
			</h2>
		</div>
		<div
			class="description-text mt-2 pr-5 text-left text-xl font-light text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
		>
			{description}
		</div>
	</div>
	<a
		href={link}
		target="_blank"
		rel="noreferrer"
		class="absolute right-2 top-1/2 z-30 -translate-y-1/2"
	>
		<ChevronRight
			size={60}
			class="text-white transition-transform duration-300 ease-in-out group-hover:translate-x-2"
		/>
	</a>
</div>

<style>
	.text {
		filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 1));
		text-shadow: 0px 0px 16px rgb(0, 0, 0, 1);
	}
	.title-text {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 100%;
	}
	.description-text {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
