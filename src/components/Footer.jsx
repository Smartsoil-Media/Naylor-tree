export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sepia-200 bg-cream-100/60">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-sepia-600">
        <p className="font-serif italic">
          "If I have seen further it is by standing on the shoulders of giants — and by sitting at the kitchen tables of grandparents."
        </p>
        <p className="mt-3 text-xs">
          A family archive · From Bray, Co. Wicklow (1801) to the present day. Edit{' '}
          <code className="bg-cream-200 px-1.5 py-0.5 rounded text-sepia-800">src/data/familyData.js</code>{' '}
          to add new people, photos, stories and documents.
        </p>
      </div>
    </footer>
  )
}
