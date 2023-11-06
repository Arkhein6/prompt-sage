"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders, LiteralUnion, ClientSafeProvider } from "next-auth/react";
import Logo from "@public/assets/images/logo.svg";
import ProfilePic from "@public/assets/images/logo.svg";
import { BuiltInProviderType } from "next-auth/providers/index";

type Props = {};

const Nav = (props: Props) => {
	const isUserLoggedIn = true;

  const [providers,setProviders] = useState< Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> | null>(null)

  useEffect(() => {
    const requestProviders = async () => {
      const responseProviders = await getProviders()
      setProviders(responseProviders)
    }
    requestProviders()

  })
  console.log(providers)

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src={Logo}
					width={30}
					height={30}
					alt="PromptSage Logo"
					className="object-contain"
				/>
				<p className="logo_text">PromptSage</p>
			</Link>
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-prompt" className="black_btn">
							Create Post
						</Link>
						<button
							className="outline_btn"
							type="button"
							onClick={() => signOut}
						>
							Sign Out
						</button>
						<Link href="/">
							<Image
              src={ProfilePic}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>
						</Link>
					</div>
				) : (
					<>
          {
            providers && Object.values(providers).map((provider) => (
              <button
              type="button"
              key={provider.name}
              onClick={() => signIn}
              className="black_btn">
                Sign In
              </button>
            ))
          }
          </>
				)}
			</div>
      {/* Mobile Nsvigation  */}
      <div className=" sm:hidden flex relative">
        {
          isUserLoggedIn ? (
            <div>

            <Image
              src={ProfilePic}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
                />
                </div>
          )
          :
          (
            providers && Object.values(providers).map((provider) => (
              <button
              type="button"
              key={provider.name}
              onClick={() => signIn}
              className="black_btn">
                Sign In
              </button>
            ))
          )
        }
      </div>
		</nav>
	);
};

export default Nav;
