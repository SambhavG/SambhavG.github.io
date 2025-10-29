<script lang="ts">
	// import { Button } from "$lib/components/ui/button";
	import { FileText, Github, Linkedin, Instagram, Mail } from 'lucide-svelte';
	import Card from './card.svelte';

	let iconSize = 24;

	type Item = { name: string; description: string; image: string; link: string };
	type CategoryName = 'Work' | 'Projects' | 'Publications';

	const data: Record<CategoryName, Item[]> = {
		Work: [
			{
				name: 'Jane Street',
				description: 'Quant Trader Intern',
				image: 'images/image_jane.png',
				link: 'https://www.janestreet.com/'
			},
			{
				name: 'Samsung Semiconductor',
				description:
					'Storage Software Engineer on Memory Solutions Lab (MSL) - Data Fabric Solutions team. Developed software for CXL devices',
				image: 'images/cxl_2.png',
				link: 'https://samsungmsl.com/dfs/'
			},
			{
				name: 'Amazon',
				description:
					'SDE intern on operations team. Developed and deployed internal AWS application',
				image: 'images/image_warehouse.jpg',
				link: 'https://amazon.com'
			},
			{
				name: 'Bobyard',
				description: 'Contech startup Principal Engineer. Startup raised $3.5M seed from Primary',
				image: 'images/image_construction.jpg',
				link: 'https://bobyard.com'
			},
			{
				name: 'Amherst Group',
				description: 'Research intern. Modeled growth regions with high accuracy using NN models',
				link: 'https://www.amherst.com/',
				image: 'images/image_buildings.jpg'
			}
		],
		Projects: [
			{
				name: 'CourseCorrect',
				description: 'A fully automatic Stanford 5 year course planner',
				image: '/images/coursecorrect_2.png',
				link: '/coursecorrect'
			},
			{
				name: 'Dine',
				description: 'See all dining hall menus at once',
				image: '/images/dine.png',
				link: '/dine'
			},
			{
				name: 'Medals',
				description: 'A 3D visualization of the Olympic medals counted in every possible way',
				image: '/images/medals.png',
				link: '/medal'
			},
			{
				name: 'QuadCorp',
				description: 'Game for learning quadric surfaces, with Lawrence Technological University',
				image: '/images/image_radar.jpg',
				link: '/QuadCorp-WebGL'
			},
			{
				name: 'Tetris',
				description: 'A Processing (Java) implementation of classic Tetris',
				image: '/images/image_tetris.jpg',
				link: 'https://github.com/SambhavG/Classic-Tetris'
			},
			{
				name: '3D Art',
				description: 'Blender art and animation',
				image: '/images/image_tree.jpg',
				link: 'https://www.instagram.com/sambhavgupta159/'
			}
		],
		Publications: [
			{
				name: 'Blog',
				description: 'Where I write about interesting things',
				image: '/images/blog.png',
				link: '/blog'
			},
			{
				name: 'Burnt Pancake Graphs',
				description: 'CFSMP graph theory research published in IJCM:CST',
				image: '/images/image_cpu.jpg',
				link: 'https://www.tandfonline.com/doi/abs/10.1080/23799927.2022.2110159?journalCode=tcom20'
			}
		]
	};

	const categories: CategoryName[] = ['Work', 'Projects', 'Publications'];
</script>

<section class="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
	<h1 class="text-left text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
		Sambhav Gupta
	</h1>
	<p class="mt-6 max-w-2xl text-left text-lg leading-relaxed text-zinc-600">
		I study math, computer science, and machine learning at Stanford
	</p>

	<div class="mt-8 flex flex-wrap items-center gap-3">
		<a
			href="/Resume_Sambhav_Gupta.pdf"
			target="_blank"
			rel="noreferrer"
			class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 transition hover:bg-zinc-50"
		>
			<FileText size={iconSize} />
			<span>Resume</span>
		</a>
		<a
			href="https://github.com/sambhavg"
			target="_blank"
			rel="noreferrer"
			class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 transition hover:bg-zinc-50"
		>
			<Github size={iconSize} />
			<span>GitHub</span>
		</a>
		<a
			href="https://www.linkedin.com/in/sambhav-g/"
			target="_blank"
			rel="noreferrer"
			class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 transition hover:bg-zinc-50"
		>
			<Linkedin size={iconSize} />
			<span>LinkedIn</span>
		</a>
		<a
			href="https://www.instagram.com/sambhavgupta159/"
			target="_blank"
			rel="noreferrer"
			class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 transition hover:bg-zinc-50"
		>
			<Instagram size={iconSize} />
			<span>Instagram</span>
		</a>
		<button
			on:click={() => (window.location.href = 'mailto:samgupta@stanford.edu')}
			class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 transition hover:bg-zinc-50"
		>
			<Mail size={iconSize} strokeWidth={2} />
			<span>Email</span>
		</button>
	</div>

	<div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
		{#each categories as category_name}
			<div class="flex flex-col">
				<div class="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
					{category_name}
				</div>
				<div class="space-y-3">
					{#each data[category_name] as item}
						<Card {...item} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
