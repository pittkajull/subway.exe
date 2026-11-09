// Mock TUI output — used in the interactive demo and the feature section.

export function FeedOutput() {
  return (
    <>
      <article className="post">
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">09/11/2026 08:00</span>
        </div>
        <p className="post__text">finally finished setting up the project</p>
        <div className="post__meta">
          <span>♥ 12</span>
          <span>↩ 4</span>
          <span className="post__id">id:a1b2c3d4</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@budi</span>
          <span className="post__time">09/11/2026 09:50</span>
        </div>
        <p className="post__text">anyone still up coding tonight</p>
        <div className="post__meta">
          <span>♥ 3</span>
          <span>↩ 1</span>
          <span className="post__id">id:e5f6g7h8</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@sari</span>
          <span className="post__time">09/11/2026 15:00</span>
        </div>
        <p className="post__text">hey everyone, just joined</p>
        <div className="post__meta">
          <span>♥ 1</span>
          <span>↩ 0</span>
          <span className="post__id">id:m3n4o5p6</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">09/11/2026 18:20</span>
        </div>
        <p className="post__text">shipping the first build tonight</p>
        <div className="post__meta">
          <span>♥ 5</span>
          <span>↩ 2</span>
          <span className="post__id">id:q7r8s9t0</span>
        </div>
      </article>
    </>
  )
}

export function FeedMock() {
  return (
    <>
      <article className="post">
        <div className="post__head">
          <span className="post__handle">@kjul</span>
          <span className="post__time">09/11 08:00</span>
        </div>
        <p className="post__text">finally finished setting up the project</p>
        <div className="post__meta">
          <span>♥ 12</span>
          <span>↩ 4</span>
          <span className="post__id">id:a1b2c3d4</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@budi</span>
          <span className="post__time">09/11 09:50</span>
        </div>
        <p className="post__text">anyone still up coding tonight</p>
        <div className="post__meta">
          <span>♥ 3</span>
          <span>↩ 1</span>
          <span className="post__id">id:e5f6g7h8</span>
        </div>
      </article>

      <article className="post">
        <div className="post__head">
          <span className="post__handle">@sari</span>
          <span className="post__time">09/11 15:00</span>
        </div>
        <p className="post__text">hey everyone, just joined</p>
        <div className="post__meta">
          <span>♥ 1</span>
          <span>↩ 0</span>
          <span className="post__id">id:m3n4o5p6</span>
        </div>
      </article>
    </>
  )
}

export function ProfileOutput() {
  return (
    <div className="pcard">
      <div className="pcard__title">@budi</div>
      <p className="pcard__bio">gamer, codes when the mood is right</p>
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
      <div className="pcard__joined">Joined Aug 2026</div>
    </div>
  )
}

export function ChatOutput() {
  return (
    <div className="chat">
      <div className="chat__line">
        <span className="chat__who">budi:</span>
        <span className="chat__text">yo what are you up to</span>
      </div>
      <div className="chat__line">
        <span className="chat__who chat__who--me">you:</span>
        <span className="chat__text">setting up the feed view</span>
      </div>
      <div className="chat__line">
        <span className="chat__who">budi:</span>
        <span className="chat__text">nice, keep going</span>
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
