import Link from 'next/link'

function AdsLink() {
  return (
    <ul>
      <li>
        <Link href="//whugesto.net/afu.php?zoneid=3776462">
          <a>AdsLink</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default AdsLink

