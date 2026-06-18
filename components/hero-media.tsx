"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/locale";
import { HERO_COPY } from "@/lib/content";
import { t } from "@/lib/locale";

const poster = "/media/pdf-diff-by-aec-dx-labs-hero-poster.jpg";

export function HeroMedia({ locale }: { locale: Locale }) {
  const [mediaErrored, setMediaErrored] = useState(false);
  const showcaseClassName = `hero-video-showcase${mediaErrored ? " hero-video-showcase--fallback" : ""}`;

  return (
    <div className="hero-media-stage">
      <div className="hero-media-stage__wrap">
        <div className={showcaseClassName}>
          <div className="hero-video-showcase__panel">
            <div className="hero-video-showcase__chrome" aria-hidden="true">
              <span className="hero-video-showcase__dot hero-video-showcase__dot--warm" />
              <span className="hero-video-showcase__dot hero-video-showcase__dot--neutral" />
              <span className="hero-video-showcase__dot hero-video-showcase__dot--cool" />
            </div>
            <div className="hero-video-showcase__frame">
              <Image
                src={poster}
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                className="hero-video-showcase__poster"
              />
              <video
                className="hero-video-showcase__video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={poster}
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
                tabIndex={-1}
                aria-hidden="true"
                onError={() => setMediaErrored(true)}
              >
                <source src="/media/pdf-diff-by-aec-dx-labs-hero-cropped.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
                <source src="/media/pdf-diff-by-aec-dx-labs-hero-cropped-web.mp4" type='video/mp4; codecs="avc1.64001F"' />
              </video>
            </div>
          </div>
          <p className="hero-video-showcase__caption">{t(locale, HERO_COPY.visualCaption)}</p>
        </div>
      </div>
    </div>
  );
}
