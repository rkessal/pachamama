import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 gap-8 justify-items-center">
        <PrismicNextLink href="/" tabIndex="-1">
          <div className="relative w-40 h-40 overflow-hidden rounded-full bg-slate-300">
            {prismic.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </PrismicNextLink>
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismic.isFilled.richText(name) && (
              <Heading>
                <PrismicNextLink href="/">
                  <PrismicText field={name} />
                </PrismicNextLink>
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = ({ navigation }) => {
  return (
    <nav className="mx-[5rem] p-[3rem] backdrop-blur-md	 left-0 right-0 bg-black/50  flex flex-row justify-between items-center h-[3.5rem] fixed top-5 rounded-[1.25rem] text-bone font-grotesk z-50">
      <Link href="/">
        <PrismicNextImage className="w-[4rem] h-[3.47375rem]" field={navigation.data.logo} />
      </Link>
      <ul className="flex flex-wrap justify-center gap-10">
        {navigation.data?.links.map((item) => (
          <li
            className="ml-[2rem] last:ml-0 text-[1.125rem]"
            key={prismic.asText(item.label)}
          >
            <PrismicNextLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
