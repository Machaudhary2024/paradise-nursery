export default function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-heading">
      <div className="about-copy">
        <p className="eyebrow">About Paradise Nursery</p>
        <h2 id="about-heading">Grown for small rooms and slow mornings.</h2>
        <p>
          Paradise Nursery started in 2019 on a single windowsill and grew
          into a small online plant shop run by three people who could not
          stop propagating cuttings for their neighbors. We still pack every
          order ourselves, in a greenhouse just outside the city, and we
          still believe the best plant is the one that survives in{' '}
          <em>your</em> home &mdash; not just the prettiest one online.
        </p>
        <p>
          Every plant we sell is chosen for real apartments: low light,
          inconsistent watering, and the occasional curious cat. We label
          each one with the care it actually needs, not the care it needs in
          a perfect greenhouse, because that&rsquo;s not where most of us
          live.
        </p>
        <dl className="about-stats">
          <div>
            <dt>Founded</dt>
            <dd>2019</dd>
          </div>
          <div>
            <dt>Plants shipped</dt>
            <dd>12,400+</dd>
          </div>
          <div>
            <dt>Growing since</dt>
            <dd>One windowsill</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
