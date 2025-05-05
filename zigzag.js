const spikeCount = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--spike-count'));
const polygon = document.getElementById('zigzag-shape');
const width = 100;
const height = 10;
const spikeWidth = width / spikeCount;

let points = '';
for (let i = 0; i < spikeCount; i++) {
  const x1 = i * spikeWidth;
  const x2 = x1 + spikeWidth / 2;
  const x3 = x1 + spikeWidth;
  points += `${x1},0 ${x2},${height} ${x3},0 `;
}

points += `${width},${height} 0,${height}`;
polygon.setAttribute('points', points);
