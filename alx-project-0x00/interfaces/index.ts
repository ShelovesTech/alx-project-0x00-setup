export interface PillProps {
  title: string
}
export interface ButtonProps {
  title: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  sizes?: "sm" | "md" | "lg"
  shapes?: "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-full"
}