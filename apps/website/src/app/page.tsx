import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import Image from 'next/image';
import Link from 'next/link';
import vercelLogo from '~/assets/powered-by-vercel.svg';
import { Banner } from '~/components/Banner';
import { InstallButton } from '~/components/InstallButton';
import { DESCRIPTION } from '~/util/constants';

export default function Page() {
	return (
		<div className="min-h-screen">
			<Banner />
			<div className="mx-auto max-w-6xl flex flex-col place-items-center gap-24 px-8 pb-16 pt-12 lg:min-h-[calc(100vh_-_40px)] lg:place-content-center lg:py-10">
				<div className="flex flex-col place-items-center gap-10 lg:flex-row lg:gap-6">
					<div className="flex flex-col place-items-center gap-8 text-center">
						<h1 className="text-3xl font-black leading-tight sm:text-7xl sm:leading-tight">
							The <span className="relative rounded bg-blurple px-3 py-1 text-white">most popular</span> way to build
							Discord bots.
						</h1>
						<p className="my-6 leading-normal text-neutral-700 dark:text-neutral-300">{DESCRIPTION}</p>
						<div className="flex flex-row gap-4">
							<Link
								className="h-11 flex flex-row transform-gpu cursor-pointer select-none appearance-none place-items-center border-0 rounded bg-blurple px-6 text-base font-semibold leading-none text-white no-underline outline-none active:translate-y-px focus:ring focus:ring-width-2 focus:ring-white"
								href="/docs"
							>
								Docs
							</Link>
							{/* <Link
								className="h-11 flex flex-row transform-gpu cursor-pointer select-none appearance-none place-items-center border-0 rounded bg-blurple px-6 text-base font-semibold leading-none text-white no-underline outline-none active:translate-y-px focus:ring focus:ring-width-2 focus:ring-white"
								href="/guide"
							>
								Guide
							</Link> */}
							<a
								className="h-11 flex flex-row transform-gpu cursor-pointer select-none appearance-none place-items-center gap-2 border border-light-900 rounded bg-white px-4 text-base font-semibold leading-none text-black no-underline outline-none transition duration-200 active:translate-y-px dark:border-dark-100 hover:border-black active:bg-light-300 dark:bg-dark-400 hover:bg-light-200 dark:text-white focus:ring focus:ring-width-2 focus:ring-blurple dark:active:bg-dark-200 dark:hover:bg-dark-300"
								href="https://discordjs.guide"
								rel="noopener noreferrer"
								target="_blank"
							>
								Guide <FiExternalLink />
							</a>
							<a
								className="h-11 flex flex-row transform-gpu cursor-pointer select-none appearance-none appearance-none place-items-center gap-2 border border-light-900 rounded bg-white px-4 text-base font-semibold leading-none text-black no-underline outline-none transition duration-200 active:translate-y-px dark:border-dark-100 hover:border-black active:bg-light-300 dark:bg-dark-400 hover:bg-light-200 dark:text-white focus:ring focus:ring-width-2 focus:ring-blurple dark:active:bg-dark-200 dark:hover:bg-dark-300"
								href="https://github.com/discordjs/discord.js"
								rel="external noopener noreferrer"
								target="_blank"
							>
								GitHub <FiExternalLink />
							</a>
						</div>
						<InstallButton />
					</div>
				</div>
				<a
					className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
					href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"
					rel="external noopener noreferrer"
					target="_blank"
					title="Vercel"
				>
					<Image
						alt="Vercel"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABLCAQAAAA1k5H2AAAAi0lEQVR42u3SMQEAAAgDoC251a3gL2SgmfBYBRAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARCAgwWEOSWBnYbKggAAAABJRU5ErkJggg=="
						height={44}
						placeholder="blur"
						priority
						src={vercelLogo}
						width={212}
					/>
				</a>
			</div>
		</div>
	);
}
