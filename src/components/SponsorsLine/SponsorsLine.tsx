import React from "react";
import styles from "./SponsorsLine.module.css";

import { GiSpoon } from "react-icons/gi";
import { MY } from "@/constants";

const sponsors = [
  {
    name: "diamond",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  },
  {
    name: "gold",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  },
  {
    name: "silver",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  },
  {
    name: "bronze",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  },
  {
    name: "community",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  },
  {
    name: "in-kind",
    items: [
      {
        sponsorEntity: {
          __typename: "Organization",
          login: "facebook",
          avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
          name: "Facebook"
        }
      }
    ]
  }
];

const sponsorTypes = {
  diamond: {
    emoji: "💎",
    header: "Diamond",
    hasName: true,
    hasCard: true,
    size: 80
  },
  gold: {
    emoji: "🥇",
    header: "Gold",
    hasName: true,
    hasCard: true,
    size: 60
  },
  silver: {
    emoji: "🥈",
    header: "Silver",
    hasName: true,
    hasCard: true,
    size: 60
  },
  bronze: {
    emoji: "🥉",
    header: "Bronze",
    hasName: true,
    hasCard: true,
    size: 60
  },
  community: {
    emoji: "👥",
    header: "Community",
    hasName: true,
    hasCard: true,
    size: 60
  },
  media: {
    emoji: "📺",
    header: "Media",
    hasName: true,
    hasCard: true,
    size: 60
  },
  "in-kind": {
    emoji: "🎁",
    header: "In-Kind",
    hasName: true,
    hasCard: true,
    size: 60
  }
};

const SponsorsLine = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>The Sponsors</div>
        <div className={`${styles.description} flex flex-row justify-center`}>
          <GiSpoon className="text-2xl my-auto" />
          <p className=" font-plex italic mx-4">
            {"you can also feed me with knowledge"}
          </p>
          😋
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.scroll}>
          {sponsors &&
            sponsors.map(
              (type) =>
                type.items.length > 0 && (
                  <div key={type.name} className={styles.sponsors}>
                    <div>
                      <header className={styles.sponsors_header}>
                        <div className={styles.type_header}>
                          <span className={styles.emoji}>
                            {sponsorTypes[type.name].emoji}
                          </span>
                          <span>
                            {`${sponsorTypes[type.name].header} sponsors`}
                          </span>
                        </div>
                      </header>
                      <div className={`${styles.cards} ${styles[type.name]}`}>
                        {/* {type.items.map((sponsor) => (
                    <SponsorItem
                      key={sponsor.sponsorEntity.login}
                      sponsor={sponsor}
                      hasName={sponsorTypes[type.name].hasName}
                      hasCard={sponsorTypes[type.name].hasCard}
                      isUser={sponsor.sponsorEntity.__typename === 'User'}
                      imgSize={sponsorTypes[type.name].size}
                    />
                  ))} */}
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
        <div className={styles["gradient-left"]} />
        <div className={styles["gradient-right"]} />
      </div>
      <div className={styles["special-sponsors_wrap"]}>
        <div className={styles["special-sponsors_content"]}>
          <div className={styles.sponsors}>
            <header className={styles["special-sponsors_header"]}>
              <div className={styles.type_header}>
                <span>
                  ❤️
                  <a
                    className={styles["stream-link"]}
                    href=""
                    target="_blank"
                    rel="nofollow noreferrer">
                    {/* Donation */}
                  </a>
                  special sponsors
                </span>
              </div>
            </header>
            <div className={styles["special-sponsors_cards"]}>
              {/* <a
                href="https://pothos-graphql.dev/"
                target="_blank"
                rel="noreferrer nofollow">
                <div className={styles["special-sponsor_card"]}>
                  <div className={styles["special-sponsor_card_image"]}>
                    <div className={styles["light-image"]}>
                      <img src="/svg/potos-dark.svg" alt="pothos" />
                    </div>
                    <div className={styles["dark-image"]}>
                      <img src="/svg/potos-light.svg" alt="pothos" />
                    </div>
                  </div>
                  <div className={styles["special-sponsor_card_name"]}>
                    Pothos
                  </div>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <a
        className={styles.button_accent}
        href="https://github.com/sponsors/XinYun2020"
        target="_blank"
        rel="nofollow noreferrer">
        Become a sponsor
      </a>
    </div>
  );
};

export default SponsorsLine;
