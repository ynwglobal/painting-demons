import { Lock, Radio, Skull, ExternalLink } from "lucide-react";

export function DropAnnouncement() {
  return (
    <aside aria-label="Drop Announcement" className="pd-drop-announcement-wrap">
      <div className="pd-drop-announcement">
        {/* Pulsing indicator & alert bar */}
        <div className="pd-drop-badge-row">
          <span className="pd-drop-beacon">
            <span className="pd-beacon-ping" />
            <span className="pd-beacon-dot" />
          </span>
          <span className="pd-drop-status">
            <Lock className="pd-icon-inline" size={13} />
            <span>VAULT STATUS: PASSWORD LOCKED</span>
          </span>
          <span className="pd-drop-divider">•</span>
          <span className="pd-drop-freq">
            <Radio className="pd-icon-inline" size={13} />
            <span>FREQUENCY: DEMONIC_BROADCAST_01</span>
          </span>
        </div>

        {/* Transmission Content */}
        <div className="pd-drop-body">
          <div className="pd-drop-headline-wrap">
            <Skull className="pd-skull-icon" size={24} />
            <h2 className="pd-drop-title">
              DEMONIC TRANSMISSION // DROP STATUS TRACKER
            </h2>
          </div>

          <p className="pd-drop-text">
            The <strong className="pd-text-glow">paintingdemons.com</strong> shop is currently sealed behind password encryption.
            Join our official Discord to track live status updates, monitor when the password page is unlocked for everyone to purchase, and secure instant alerts before drops vanish into the veil.
          </p>

          <div className="pd-drop-action">
            <a
              href="https://discord.gg/XQFhMYMH9"
              target="_blank"
              rel="noopener noreferrer"
              className="pd-drop-btn"
            >
              <span className="pd-btn-glow" />
              <span className="pd-btn-text">
                JOIN DISCORD FOR DROP UPDATES & LIVE UNLOCK STATUS
              </span>
              <ExternalLink size={15} className="pd-btn-arrow" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .pd-drop-announcement-wrap {
          width: 100%;
          background: #000;
          padding: 14px 16px;
          border-bottom: 2px solid #3a0000;
          position: relative;
          z-index: 150;
        }

        .pd-drop-announcement {
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(26, 0, 0, 0.92) 0%, rgba(10, 0, 0, 0.98) 50%, rgba(35, 5, 5, 0.9) 100%);
          border: 1px solid #8b0000;
          border-left: 4px solid #ff1a1a;
          box-shadow: 0 0 25px rgba(139, 0, 0, 0.35), inset 0 0 20px rgba(80, 0, 0, 0.25);
          border-radius: 4px;
          padding: 16px 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Courier New', Courier, monospace;
        }

        /* Ambient scanline texture */
        .pd-drop-announcement::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 2px,
            transparent 2px,
            transparent 4px
          );
          pointer-events: none;
          opacity: 0.7;
        }

        .pd-drop-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #ff6b6b;
          margin-bottom: 10px;
        }

        .pd-drop-beacon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 10px;
          height: 10px;
        }

        .pd-beacon-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #ff1a1a;
          opacity: 0.75;
          animation: pdBeaconPing 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .pd-beacon-dot {
          position: relative;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff2b2b;
          box-shadow: 0 0 8px #ff1a1a;
        }

        @keyframes pdBeaconPing {
          75%, 100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        .pd-drop-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
          color: #ff3333;
          text-shadow: 0 0 8px rgba(255, 51, 51, 0.6);
        }

        .pd-drop-freq {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #888;
        }

        .pd-drop-divider {
          color: #555;
        }

        .pd-icon-inline {
          flex-shrink: 0;
        }

        .pd-drop-body {
          position: relative;
          z-index: 2;
        }

        .pd-drop-headline-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .pd-skull-icon {
          color: #ff2222;
          filter: drop-shadow(0 0 6px #ff0000);
          animation: pdGlowPulse 2.5s ease-in-out infinite;
        }

        @keyframes pdGlowPulse {
          0%, 100% { filter: drop-shadow(0 0 4px #ff0000); }
          50% { filter: drop-shadow(0 0 12px #ff4444); }
        }

        .pd-drop-title {
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #ffffff;
          text-transform: uppercase;
          text-shadow: 0 0 10px rgba(255, 34, 34, 0.7);
          margin: 0;
        }

        .pd-drop-text {
          font-size: 13px;
          line-height: 1.55;
          color: #cccccc;
          margin: 0 0 14px 0;
          max-width: 900px;
        }

        .pd-text-glow {
          color: #ffffff;
          text-decoration: underline;
          text-decoration-color: #ff2222;
          text-underline-offset: 3px;
        }

        .pd-drop-action {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pd-drop-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #3d0000;
          border: 1px solid #ff2222;
          color: #ffffff;
          font-family: 'Courier New', Courier, monospace;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.08em;
          padding: 10px 18px;
          text-transform: uppercase;
          border-radius: 2px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          overflow: hidden;
          box-shadow: 0 0 12px rgba(255, 34, 34, 0.35);
        }

        .pd-drop-btn:hover {
          background: #ff1111;
          color: #000000;
          border-color: #ffffff;
          box-shadow: 0 0 25px rgba(255, 20, 20, 0.8), 0 0 10px #ffffff;
          transform: translateY(-1px);
        }

        .pd-drop-btn:hover .pd-btn-arrow {
          transform: translateX(3px);
        }

        .pd-btn-arrow {
          transition: transform 0.2s ease;
        }

        @media (max-width: 640px) {
          .pd-drop-announcement-wrap {
            padding: 10px 10px;
          }
          .pd-drop-announcement {
            padding: 12px 14px;
          }
          .pd-drop-title {
            font-size: 13px;
          }
          .pd-drop-text {
            font-size: 12px;
          }
          .pd-drop-btn {
            font-size: 11px;
            padding: 9px 12px;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </aside>
  );
}
