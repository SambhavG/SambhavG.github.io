<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	export let name = 'CourseCorrect';
	export let description = 'Default Description';
	export let image = 'https://via.placeholder.com/150';
	export let link = 'https://www.google.com';
</script>

<a
	href={link}
	target="_blank"
	rel="noreferrer"
	class="group block rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50"
>
	<div class="flex items-center gap-4">
		<div class="min-w-0 flex-1">
			<h3 class="truncate text-left text-xl font-semibold leading-6 text-zinc-900">{name}</h3>
			<p class="mt-1 line-clamp-2 text-left text-sm text-zinc-600">{description}</p>
		</div>
		{#if image}
			<img
				src={image}
				alt={name}
				class="h-12 w-16 flex-none rounded-md object-cover object-center"
			/>
		{/if}
		<span
			class="ml-auto inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition group-hover:border-zinc-300 group-hover:text-zinc-600"
		>
			<ChevronRight size={18} />
		</span>
	</div>
</a>
