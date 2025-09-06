import Head from 'next/head';

export default function Play() {
  return (
    <>
      <Head>
        <title>Play the Game | Ben & Anylah</title>
        <meta name="description" content="Enjoy the game made with love for Anylah." />
      </Head>
      <div style={{
        fontFamily: 'Georgia, serif',
        backgroundColor: '#fff0f5',
        color: '#4b2e2e',
        textAlign: 'center',
        padding: '80px 20px',
        minHeight: '100vh',
        transition: 'background-color 0.5s ease'
      }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: 20 }}>Let’s Play! 🎮</h1>
        <p style={{
          fontSize: '1.2em',
          maxWidth: 600,
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          The adventure begins here.<br />
          Dive in and enjoy every moment!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          {/* Embed your game below.
              If your game is at /game/index.html, you can use an iframe like this: */}
          <iframe
            src="/game/index.html"
            width="800"
            height="600"
            style={{
              border: '4px solid #ff69b4',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              background: '#fff'
            }}
            title="Ben & Anylah Game"
            allowFullScreen
          ></iframe>
        </div>
        <p className="quote" style={{
          fontStyle: 'italic',
          marginTop: 30,
          color: '#7a4b4b'
        }}>
          “Every adventure is better with you.”
        </p>
      </div>
    </>
  );
}