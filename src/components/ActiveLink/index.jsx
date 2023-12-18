import {cloneElement} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

// interface ActiveLinkProps extends LinkProps{
//   children: ReactElement;
//   activeClassName: string;
// }

export default function ActiveLink({ children, activeClassName, ...rest}) {
  const { asPath} = useRouter()

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} >
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}
