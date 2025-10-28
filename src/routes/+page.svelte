<script lang="ts">
	// import { Button } from "$lib/components/ui/button";
	import { FileText, Github, Linkedin, Instagram, Mail } from 'lucide-svelte';
	import Card from './card.svelte';

	let iconSize = 40;

	let data = {
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
</script>

<div
	class="flex min-h-screen flex-col items-center justify-start bg-slate-800 px-3 text-center text-2xl text-white md:px-0"
>
	<div class="pt-12 text-6xl font-bold">Sambhav Gupta</div>
	<div class="pt-6 font-semibold">
		I study math, computer science, and machine learning at Stanford
	</div>
	<!-- <div class="pt-2 font-semibold">
		I've worked at Samsung Semiconductor, Amazon, Bobyard (a contech startup), and The Amherst Group
		LLC
	</div> -->

	<div class="grid h-20 w-72 grid-cols-5 items-center justify-around pt-6">
		<a href="/Resume_Sambhav_Gupta.pdf" target="_blank" rel="noreferrer">
			<FileText size={iconSize} />
		</a>
		<a href="https://github.com/sambhavg" target="_blank" rel="noreferrer">
			<Github class="social-icon" size={iconSize} />
		</a>
		<a href="https://www.linkedin.com/in/sambhav-g/" target="_blank" rel="noreferrer">
			<Linkedin class="social-icon" size={iconSize} />
		</a>
		<a href="https://www.instagram.com/sambhavgupta159/" target="_blank" rel="noreferrer">
			<Instagram class="social-icon" size={iconSize} />
		</a>
		<button on:click={() => (window.location.href = 'mailto:samgupta@stanford.edu')}>
			<Mail class="social-icon" size={iconSize} strokeWidth={2} />
		</button>
	</div>

	<div
		class="grid w-full grid-cols-1 items-start justify-around pt-6 text-4xl font-semibold md:px-10 lg:grid-cols-3"
	>
		{#each Object.keys(data) as category_name}
			<div class="flex flex-col md:px-1">
				<div class="pb-5 pt-10 md:pt-0">{category_name}</div>
				{#each data[category_name] as item}
					<div class="pb-2">
						<Card {...item} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	:root {
		background-color: #1f2937;
	}
</style>
