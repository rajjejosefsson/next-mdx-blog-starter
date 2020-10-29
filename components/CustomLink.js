/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

export default function CustomLink({as, href, ...otherProps}) {
  return (
    <>
      <Link as={as} href={href}>
        <as {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  )
}
