import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { HERO_COPY } from "@/lib/content";
import { t } from "@/lib/locale";

const poster = "/media/pdf-diff-by-aec-dx-labs-hero-poster.jpg";

export function HeroMedia({ locale }: { locale: Locale }) {
  return (
    <div className="hero-video-showcase">
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
            sizes="(min-width: 768px) 52vw, calc(100vw - 2.5rem)"
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
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src="/media/pdf-diff-by-aec-dx-labs-hero-cropped.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
            <source src="/media/pdf-diff-by-aec-dx-labs-hero-cropped-web.mp4" type='video/mp4; codecs="avc1.64001F"' />
          </video>
        </div>
      </div>
      <p className="caption">{t(locale, HERO_COPY.visualCaption)}</p>
    </div>
  );
}
