import {
  CalendarDays,
  Check,
  FileText,
  LockKeyhole,
  MessageSquare,
  PanelLeft,
  Plus,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function ProjectSketch({
  kind,
  compact = false,
}: {
  kind: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-sketch sketch-${kind} ${compact ? "sketch-compact" : ""}`}
      aria-hidden="true"
    >
      {kind === "along" && (
        <>
          <div className="workspace-toolbar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>Along workspace</span>
            <PanelLeft size={15} />
          </div>
          <div className="workspace-windows">
            <div className="mini-window window-code">
              <div className="mini-title">A thought</div>
              <div className="code-lines">
                <b>func arrangeWindows() {"{"}</b>
                <span>let space = Workspace()</span>
                <span>space.makeRoom()</span>
                <b>{"}"}</b>
              </div>
              <span className="window-caption">Build something useful.</span>
            </div>
            <div className="mini-window window-note">
              <div className="mini-title">A little space</div>
              <div className="note-orbit">
                <span />
                <span />
                <span />
              </div>
              <strong>
                Room for
                <br />
                the next idea.
              </strong>
            </div>
            <div className="mini-window window-tasks">
              <div className="mini-title">A plan</div>
              <span>
                <Check size={13} /> Follow the curiosity
              </span>
              <span>
                <Check size={13} /> Make it work
              </span>
              <span>
                <Plus size={13} /> Make it better
              </span>
              <div className="task-line" />
              <div className="task-line short" />
            </div>
          </div>
          <div className="workspace-footer">
            <span>One continuous workspace</span>
            <span>ctrl + option + →</span>
          </div>
        </>
      )}
      {kind === "privmed" && (
        <div className="privacy-diagram">
          <div className="lab-row">
            {["Lab A", "Lab B", "Lab C"].map((lab) => (
              <div className="lab-node" key={lab}>
                <ShieldCheck size={22} />
                <span>{lab}</span>
                <small>Local training</small>
              </div>
            ))}
          </div>
          <div className="connection-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="aggregation">
            <LockKeyhole size={20} />
            <span>Encrypted aggregation</span>
          </div>
          <p>Shared learning. Private data.</p>
        </div>
      )}
      {kind === "plan" && (
        <div className="calendar-sketch">
          <div className="calendar-sidebar">
            <CalendarDays size={21} />
            <span />
            <span />
            <span />
          </div>
          <div className="calendar-main">
            <div className="calendar-heading">
              <strong>A little more intentional.</strong>
              <span>Week view</span>
            </div>
            <div className="calendar-days">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                <div key={d}>
                  <span>{d}</span>
                  <b>{19 + i}</b>
                </div>
              ))}
            </div>
            <div className="calendar-events">
              <div className="event event-green">Deep work</div>
              <div className="event event-red">An idea worth exploring</div>
              <div className="event event-outline">Room to breathe</div>
            </div>
          </div>
        </div>
      )}
      {kind === "truthlens" && (
        <div className="analysis-sketch">
          <div className="analysis-input">
            <FileText size={20} />
            <span>A claim deserves a closer look.</span>
            <div />
            <div />
            <div />
          </div>
          <div className="analysis-path">
            <span>Read</span>
            <i />
            <span>Analyze</span>
            <i />
            <span>Explain</span>
          </div>
          <div className="analysis-result">
            <ShieldCheck size={19} />
            <span>Reasoning you can inspect</span>
          </div>
        </div>
      )}
      {kind === "civicecho" && (
        <div className="civic-sketch">
          <div className="civic-map">
            <i />
            <i />
            <i />
            <i />
            <span className="map-pin">
              <MessageSquare size={22} />
            </span>
          </div>
          <div className="civic-report">
            <Smartphone size={22} />
            <strong>A voice for your neighborhood.</strong>
            <div className="report-types">
              <span>Text</span>
              <span>Photo</span>
              <span>Voice</span>
            </div>
          </div>
        </div>
      )}
      {kind === "ridechain" && (
        <div className="ride-sketch">
          <div className="route-point">A</div>
          <div className="ride-route">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="route-point route-end">B</div>
          <div className="ride-contract">
            <ShieldCheck size={22} />
            <span>Connected by a smart contract</span>
          </div>
        </div>
      )}
    </div>
  );
}
