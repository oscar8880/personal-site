import React, { SVGProps } from 'react';

interface BlobProps extends SVGProps<SVGSVGElement> {
  colour?: 'pink' | 'yellow' | 'green' | 'blue';
  shape?: '1' | '2' | '3' | '4';
}

const shapes = {
  '1': {
    d:
      'M391.367 91.056c25.367 62.053-7.203 158.719-71.09 202.062-63.575 43.656-157.841 33.99-226.114-14.655C25.891 229.818-16.075 142.195 5.848 84.819 27.77 27.131 113.267-.309 198.138 0 282.695.314 366 28.69 391.368 91.056z',
    viewBox: '0 0 408 337',
  },
  '2': {
    d:
      'M531.208 208.767c38.943 116.143 8.113 259.088-71.395 311.474-79.508 52.792-208.1 15.431-308.297-58.072C51.319 388.667-20.076 278.615 5.075 181.153 30.63 83.285 152.733-1.995 268.345.036c115.205 2.436 223.92 92.589 262.863 208.731z',
    viewBox: '0 0 548 545',
  },
  '3': {
    d:
      'M414.12 104.675c17.184 61.521-45.19 139.85-116.157 186.466-70.967 46.299-150.208 61.204-210.99 23.467C26.188 276.87-16.456 186.809 6.14 117.994 28.735 49.18 115.932 1.612 208.22.027c91.97-1.269 188.715 43.128 205.9 104.648z',
    viewBox: '0 0 417 336',
  },
  '4': {
    d:
      'M4.332 88.456c-20.106 62.113 50.083 153.09 128.68 203.51 78.598 50.056 165.603 59.19 217.88 20.826 52.641-37.998 70.189-123.494 46.792-189.991C374.288 56.304 309.582 8.806 222.211 1.498 134.841-5.809 24.44 26.708 4.332 88.456z',
    viewBox: '0 0 408 337',
  },
};

const colours = {
  green: '#06D6A0',
  pink: '#EF476F',
  yellow: '#FFD166',
  blue: '#1FB7EA',
};

const Blob: React.FC<BlobProps> = ({
  colour = 'green',
  shape = '1',
  ...props
}) => {
  return (
    <svg
      viewBox={shapes[shape].viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={shapes[shape].d} fill={colours[colour]} />
    </svg>
  );
};

export default Blob;
