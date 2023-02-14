import { useState } from 'react';
import clsx from 'clsx';
import MarkWebber from './assets/avatar-mark-webber.webp';
import AngelaGray from './assets/avatar-angela-gray.webp';
import JacobThompson from './assets/avatar-jacob-thompson.webp';
import RizkyHasanuddin from './assets/avatar-rizky-hasanuddin.webp';
import KimberlySmith from './assets/avatar-kimberly-smith.webp';
import NathanPeterson from './assets/avatar-nathan-peterson.webp';
import AnnaKim from './assets/avatar-anna-kim.webp';
import ChessClub from './assets/image-chess.webp';

function App() {
  const [allRead, setAllRead] = useState(false);

  return (
    <div className="grid min-h-screen place-content-center">
      <main className="max-w-screen-mobile rounded-lg bg-white p-4 shadow-xl desktop:max-w-[720px] desktop:p-8">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex gap-2 desktop:gap-4">
            <h1 className="text-xl font-bold desktop:text-2xl">
              Notifications
            </h1>
            <div className="grid place-content-center rounded-md bg-_blue px-3 text-white">
              {allRead ? '0' : '3'}
            </div>
          </div>

          <button
            onClick={() => setAllRead(true)}
            className="text-sm text-_dark-grayish-blue hover:text-_blue desktop:text-base"
          >
            Mark all as read
          </button>
        </header>
        <div className="flex flex-col gap-3 text-sm desktop:text-base">
          <article
            className={clsx(
              'flex items-start gap-4 rounded-lg p-4',
              allRead
                ? 'bg-white'
                : 'bg-_very-light-grayish-blue shadow shadow-_light-grayish-blue-1/50'
            )}
          >
            <img
              src={MarkWebber}
              alt="Mark Webber"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2 className="relative">
                  <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Mark Webber
                  </span>
                  <span className="pr-1 text-_dark-grayish-blue">
                    reacted to your recent post
                  </span>
                  <span className="cursor-pointer font-bold text-_dark-grayish-blue hover:text-_blue">
                    My first tournament today!
                    {!allRead && (
                      <span className="absolute bottom-1 h-2 w-2 translate-x-1 rounded-full bg-_red"></span>
                    )}
                  </span>
                </h2>
              </div>
              <p className="text-_grayish-blue">1m ago</p>
            </div>
          </article>

          <article
            className={clsx(
              'flex items-start gap-4 rounded-lg p-4',
              allRead
                ? 'bg-white'
                : 'bg-_very-light-grayish-blue shadow shadow-_light-grayish-blue-1/50'
            )}
          >
            <img
              src={AngelaGray}
              alt="Angela Gray"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2 className="relative">
                  <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Angela Gray
                  </span>
                  <span className="relative text-_dark-grayish-blue">
                    followed you
                    {!allRead && (
                      <span className="absolute bottom-1 h-2 w-2 translate-x-1 rounded-full bg-_red"></span>
                    )}
                  </span>
                </h2>
              </div>
              <p className="text-_grayish-blue">5m ago</p>
            </div>
          </article>

          <article
            className={clsx(
              'flex items-start gap-4 rounded-lg p-4',
              allRead
                ? 'bg-white'
                : 'bg-_very-light-grayish-blue shadow shadow-_light-grayish-blue-1/50'
            )}
          >
            <img
              src={JacobThompson}
              alt="Jacob Thompson"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2 className="relative">
                  <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Jacob Thompson
                  </span>
                  <span className="pr-1 text-_dark-grayish-blue">
                    has joined your group
                  </span>
                  <span className="relative cursor-pointer font-bold text-_blue">
                    Chess Club
                    {!allRead && (
                      <span className="absolute bottom-1 h-2 w-2 translate-x-1 rounded-full bg-_red"></span>
                    )}
                  </span>
                </h2>
              </div>
              <p className="text-_grayish-blue">1 day ago</p>
            </div>
          </article>

          <article className="flex items-start gap-4 p-4">
            <img
              src={RizkyHasanuddin}
              alt="Rizky Hasanuddin"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2>
                  <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Rizky Hasanuddin
                  </span>
                  <span className="pr-1 text-_dark-grayish-blue">
                    sent you a private message
                  </span>
                </h2>
              </div>
              <p className="text-_grayish-blue">5 days ago</p>

              <aside className="mt-4 cursor-pointer rounded-lg border border-_light-grayish-blue-2 px-4 py-2 shadow-sm shadow-_light-grayish-blue-1/30 hover:bg-_light-grayish-blue-1">
                <p className="text-_dark-grayish-blue">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </aside>
            </div>
          </article>

          <article className="flex justify-between p-4">
            <div className="flex items-start gap-4">
              <img
                src={KimberlySmith}
                alt="Kimberly Smith"
                height={48}
                width={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h2>
                  <span className="cursor-pointer whitespace-nowrap pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Kimberly Smith
                  </span>
                  <span className="pr-1 text-_dark-grayish-blue">
                    commented on your picture
                  </span>
                </h2>
                <p className="text-_grayish-blue">1 week ago</p>
              </div>
            </div>
            <img
              src={ChessClub}
              height={48}
              width={48}
              alt="woman playing a game of chess"
              className="box-content h-10 w-10 cursor-pointer rounded-lg border-_light-grayish-blue-2 hover:border-4"
            />
          </article>

          <article className="flex items-start gap-4 p-4">
            <img
              src={NathanPeterson}
              alt="Nathan Peterson"
              height={48}
              width={48}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <h2>
                <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                  Nathan Peterson
                </span>
                <span className="pr-1 text-_dark-grayish-blue">
                  reacted to your recent post
                </span>
                <span className="break- cursor-pointer font-bold text-_dark-grayish-blue hover:text-_blue">
                  5 end-game strategies to increase your win rate
                </span>
              </h2>
              <p className="text-_grayish-blue">2 weeks ago</p>
            </div>
          </article>

          <article className="flex items-start gap-4 p-4">
            <img
              src={AnnaKim}
              alt="Anna Kim"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2>
                  <span className="flex-none cursor-pointer pr-1 font-bold text-_very-dark-blue hover:text-_blue">
                    Anna Kim
                  </span>
                  <span className="pr-1 text-_dark-grayish-blue">
                    left the group
                  </span>
                  <span className="cursor-pointer font-bold text-_blue">
                    Chess Club
                  </span>
                </h2>
              </div>
              <p className="text-_grayish-blue">2 weeks ago</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

const Attribution = () => {
  return (
    <div>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.frontendmentor.io/profile/orphandeity">
        Jeff R Williams
      </a>
      .
    </div>
  );
};

export default App;
