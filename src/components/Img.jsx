export default function Img({ src, alt, ...rest }) {
  return (
    <img
      src={src || '/images/placeholder.svg'}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/placeholder.svg' }}
      {...rest}
    />
  )
}
