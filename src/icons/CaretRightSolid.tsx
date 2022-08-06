type Props = { color: string };

export default function CaretRightSolid({ color }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        d="M9 17.898c0 1.074 1.265 1.648 2.073.941l6.311-5.522a1.75 1.75 0 0 0 0-2.634l-6.311-5.522C10.265 4.454 9 5.028 9 6.102v11.796z"
        fill={color}
      />
    </svg>
  );
}
