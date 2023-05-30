import Image, { ImageProps } from "next/image";
import React from "react";
import RMCSquare from "@/server_assets/images/rmc-logo-sq.jpg";
import RMCRect from "@/server_assets/images/rmc-logo-rect-light.png";

interface LogoProps {
	img?: ImageProps;
	type?: "square" | "rect";
}

export default function Logo({
	img = {
		width: 48,
		height: 48,
		src: "/assets/images/rmc-cbit.jpg",
		alt: "RMC CBIT Logo",
		priority: true,
	},
	type = "square",
}: LogoProps) {
	switch (type) {
		case "square":
			return <Image alt={img.alt} {...img} src={RMCSquare} />;
		case "rect":
			return (
				<Image
					alt={img.alt}
					{...img}
					width={150}
					height={43}
					src={RMCRect}
				/>
			);
	}
}
