import { CTA_COPY } from '../../content/copy'
import StoreButtons from '../ui/StoreButtons'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta-content">
        <h2 className="cta-title">
          {CTA_COPY.title[0]}
          <br />
          {CTA_COPY.title[1]}
        </h2>
        <p className="cta-description">{CTA_COPY.description}</p>
        <StoreButtons centered />
      </div>
    </section>
  )
}
