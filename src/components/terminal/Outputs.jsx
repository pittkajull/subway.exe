// Mock content TUI — dipakai di demo interaktif dan di section fitur.

export function FeedOutput() {
  return (
    <>
      <article className="post post--boxed">
        <p className="post__repost">↻ reposted by @budi</p>
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">09/11/2026 08:00</span>
        </div>
        <p className="post__text">akhirnya kelar juga setup project ini</p>
        <div className="post__meta">
          <span>♥ 12</span>
          <span>💬 4</span>
          <span className="post__id">id:a1b2c3d4</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@budi</span>
          <span className="post__time">09/11/2026 09:50</span>
        </div>
        <p className="post__text">siapa yang masih begadang coding malem ini</p>
        <div className="post__meta">
          <span>♥ 3</span>
          <span>💬 1</span>
          <span className="post__id">id:e5f6g7h8</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">
            08/11/2026 20:10 <span className="post__edited">(edited)</span>
          </span>
        </div>
        <p className="post__text">react itu library apa framework sih sebenernya</p>
        <div className="post__meta">
          <span>♥ 7</span>
          <span>💬 9</span>
          <span className="post__id">id:i9j0k1l2</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@sari</span>
          <span className="post__time">08/11/2026 15:00</span>
        </div>
        <p className="post__text">halo semua, baru gabung nih</p>
        <div className="post__meta">
          <span>♥ 1</span>
          <span>💬 0</span>
          <span className="post__id">id:m3n4o5p6</span>
        </div>
      </article>
    </>
  )
}

export function FeedMock() {
  return (
    <>
      <article className="post post--boxed">
        <p className="post__repost">↻ reposted by @budi</p>
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">09/11 08:00</span>
        </div>
        <p className="post__text">akhirnya kelar juga setup project ini</p>
        <div className="post__meta">
          <span>♥ 12</span>
          <span>💬 4</span>
          <span className="post__id">id:a1b2c3d4</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">
            08/11 20:10 <span className="post__edited">(edited)</span>
          </span>
        </div>
        <p className="post__text">react itu library apa framework sih sebenernya</p>
        <div className="post__meta">
          <span>♥ 7</span>
          <span>💬 9</span>
          <span className="post__id">id:i9j0k1l2</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@sari</span>
          <span className="post__time">08/11 15:00</span>
        </div>
        <p className="post__text">halo semua, baru gabung nih</p>
      </article>
    </>
  )
}

export function StoriesOutput({ simple = false }) {
  return (
    <div className="stories">
      <div className="story">
        <span className="story__dot" aria-hidden="true">
          ●
        </span>
        <span className="story__user">@budi</span>
        <span className="story__left">23h left</span>
        <span className="story__text">"lagi ngopi dulu"</span>
      </div>
      <div className="story">
        <span className="story__dot" aria-hidden="true">
          ●
        </span>
        <span className="story__user">@sari</span>
        <span className="story__left">5h left</span>
        <span className="story__text">"libur kerja hari ini!"</span>
      </div>
      <div className="story story--me">
        <span className="story__dot story__dot--off" aria-hidden="true">
          ○
        </span>
        <span className="story__user">
          @kjul <span className="story__you">(kamu)</span>
        </span>
        <span className="story__left">20h left</span>
        <span className="story__text">"setup project kelar"</span>
      </div>
      {!simple && (
        <p className="term__footnote">
          story hilang otomatis 24 jam setelah diposting.
        </p>
      )}
    </div>
  )
}

export function ProfileOutput() {
  return (
    <div className="pcard">
      <div className="pcard__title">@budi</div>
      <p className="pcard__bio">gamer, ngoding kalo mood lagi bagus</p>
      <div className="pcard__stats">
        <span>
          <b>42</b> posts
        </span>
        <span>
          <b>128</b> followers
        </span>
        <span>
          <b>90</b> following
        </span>
      </div>
      <div className="pcard__joined">Bergabung sejak Agu 2026</div>
    </div>
  )
}

export function ChatOutput() {
  return (
    <div className="chat">
      <div className="chat__line">
        <span className="chat__who">budi:</span>
        <span className="chat__text">woi lagi apa</span>
      </div>
      <div className="chat__line">
        <span className="chat__who chat__who--me">you:</span>
        <span className="chat__text">lagi setup fitur repost</span>
      </div>
      <div className="chat__line">
        <span className="chat__who">budi:</span>
        <span className="chat__text">mantap, gas terus</span>
      </div>
      <div className="chat__input">
        <span className="chat__arrow" aria-hidden="true">
          ›
        </span>
        <span className="chat__cursor" aria-hidden="true" />
      </div>
    </div>
  )
}
