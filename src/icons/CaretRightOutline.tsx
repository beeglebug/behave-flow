type Props = { color: string };

export default function CaretRightOutline({ color }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        d="M11.073 18.839c-.808.707-2.073.133-2.073-.941V6.102c0-1.074 1.265-1.648 2.073-.941l6.311 5.522a1.75 1.75 0 0 1 0 2.634l-6.311 5.522zm-.573-1.492l5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694z"
        fill={color}
      />
    </svg>
  );
}
