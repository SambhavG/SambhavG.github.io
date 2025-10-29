<script lang="ts">
	// import { Button } from "$lib/components/ui/button";
	import { FileText, Github, Linkedin, Instagram, Mail } from 'lucide-svelte';

	let iconSize = 24;

	type Item = { name: string; description: string; image: string; link: string };
	type CategoryName = 'Work' | 'Projects' | 'Publications';

	const data: Record<CategoryName, Item[]> = {
		Work: [
			{
				name: 'Jane Street',
				description: 'Quant Trader Intern, Options and Commodities',
				image: 'images/image_jane.png',
				link: 'https://www.janestreet.com/'
			},
			{
				name: 'Samsung Semiconductor',
				description: 'MSL Storage Software Engineer, Data Fabric Solutions team',
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

	const categories: CategoryName[] = ['Publications', 'Projects', 'Work'];
</script>

<section class="mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
	<h1 class="text-left text-5xl font-medium tracking-tight text-zinc-900 md:text-6xl">
		Sambhav Gupta
	</h1>
	<p class="mt-4 max-w-2xl text-left text-base leading-relaxed text-zinc-600 md:text-lg">
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

	<div class="mt-8">
		{#each categories as category_name, i}
			<div class="flex flex-col border-t border-zinc-100 pt-8 first:border-0 first:pt-0">
				<div class="mb-0 text-[15px] font-medium uppercase tracking-[0.18em] text-zinc-900">
					{category_name}
				</div>
				<div>
					{#each data[category_name] as item}
						<a
							href={item.link}
							target="_blank"
							rel="noreferrer"
							class="group relative block px-2 py-2 transition-colors hover:text-zinc-900"
						>
							<div class="min-w-0">
								<h3
									class="text-left text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-600"
								>
									{item.name}
								</h3>
								<p class="mt-1 line-clamp-2 px-4 text-left text-[13px] text-sm text-zinc-600">
									{item.description}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
