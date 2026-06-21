"use client";

import { useState } from "react";
import { FEATURE_SHOWCASE } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

function FeatureVideo({ src, srcFallback, poster }: {
  src: string;
  srcFallback: string;
  poster: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <img src={poster} alt="" style={{ display: "block", width: "100%", height: "auto" }} />;
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
      tabIndex={-1}
      aria-hidden="true"
      onError={() => setErrored(true)}
    >
      <source src={src} type='video/mp4; codecs="av01.0.08M.08"' />
      <source src={srcFallback} type='video/mp4; codecs="avc1.64001F"' />
    </video>
  );
}

export function WorkflowSection({ locale }: { locale: Locale }) {
  return (
    <section id="workflow" className="workflow-section section">
      <div className="section-wrap">
        <p className="section-label">
          {locale === "ja" ? "ここが違う" : "What makes it different"}
        </p>
        <h2 className="section-title">
          {locale === "ja" ? "差分作業を加速する3つの機能" : "Three features that do the heavy lifting"}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "補正・検出・マークアップを、一つのツールで完結。"
            : "Alignment that works. Differences you can read. Markup that's ready to hand off."}
        </p>

        <div className="workflow-story-grid">
          {FEATURE_SHOWCASE.map((feature, index) => (
            <article key={feature.id} className={`workflow-story ${index % 2 === 1 ? "workflow-story--image-left" : ""}`}>
              <div className="workflow-story__copy">
                <span className={`feature-badge feature-badge--${feature.badgeColor}`}>
                  {t(locale, feature.badge)}
                </span>
                <h3>{t(locale, feature.headline)}</h3>
                <p className="feature-subline">{t(locale, feature.subline)}</p>
                <p className="card-body">{t(locale, feature.body)}</p>
              </div>
              <div className="workflow-story__image">
                <FeatureVideo
                  src={feature.videoSrc}
                  srcFallback={feature.videoSrcFallback}
                  poster={feature.posterSrc}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
