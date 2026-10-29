// الخط المتعرج المتحرك (قابل لإعادة الاستخدام)
// base: نقط الخط [x, y] داخل viewBox، و width/height أبعاد الـ viewBox

const DEFAULT_BASE = [
  [0, 19], [33, 6], [78, 17], [105, 4], [188, 14],
  [220, 0], [283, 13], [300, 4], [343, 15],
];

// إزاحة [dx, dy] لكل نقطة فى كل وضع. بيرجع للوضع الأول فى الآخر (لوب)
const Z = [0, 0];
const WOBBLE = [
  [Z, Z, Z, Z, Z, Z, Z, Z, Z],
  [[0,-1],[2,1.5],[-2,-1.5],[0,1.5],[4,-1],[-2,1.5],[4,-1.5],[0,1],[0,-1]],
  [[0,1],[-2,-1],[2,1],[2,-1],[-4,1.5],[2,-1.5],[-4,1],[2,-1],[0,1]],
  [[0,-0.5],[2,1],[0,-1],[-2,1],[2,0],[0,1],[2,-1],[-2,1.5],[0,-0.5]],
  [Z, Z, Z, Z, Z, Z, Z, Z, Z],
];

const toPath = (base, offsets) =>
  base
    .map(([x, y], i) => {
      const [dx, dy] = offsets[i];
      return `${i === 0 ? "M" : "L"}${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`;
    })
    .join(" ");

const Squiggle = ({
  base = DEFAULT_BASE,
  width = 343,
  height = 20,
  dur = "2.4s",
  className = "",
}) => {
  const frames = WOBBLE.map((o) => toPath(base, o));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
      fill="none"
      stroke="#fa2119"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={frames[0]}>
        <animate
          attributeName="d"
          values={frames.join(";")}
          dur={dur}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Squiggle;