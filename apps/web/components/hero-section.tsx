import React from "react";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

export default function HeroSection() {
	return (
		<>
			<main className="overflow-x-hidden">
				<section>
					<div className="pb-24 pt-16 md:pb-28 lg:pb-44 lg:pt-40">
						<div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
							<div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
								<h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium tracking-tight md:text-6xl lg:mt-12 xl:text-7xl">
									Transform Ideas into{" "}
									<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
										Visual Magic
									</span>{" "}
									with AI
								</h1>
								<p className="mt-8 max-w-2xl text-pretty text-lg">
									Transform your ideas into professional thumbnails, AI-generated images, and custom signatures in
									seconds.
								</p>

								<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
									<Button asChild size="lg" className="px-5 text-base">
										<Link href="#link">
											<span className="text-nowrap">Start Generating</span>
										</Link>
									</Button>
									<Button
										key={2}
										asChild
										size="lg"
										variant="ghost"
										className="px-5 text-base transition-all duration-300 hover:bg-accent hover:text-accent-foreground ease-in-out"
									>
										<Link href="#link">
											<span className="text-nowrap">Request a Feature</span>
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
