const SVGIcon = (props) =>
  <svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>;
<Rating
  emptySymbol={<SVGIcon href="#icon-star-empty" className="icon" />}
  fullSymbol={<SVGIcon href="#icon-star-full" className="icon" />}
/>