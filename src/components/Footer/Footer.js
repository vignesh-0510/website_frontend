export default function Footer() {
    return (
		<footer className="bg-dark text-white text-center py-3 mt-auto">
			<div className="container">
				<p className="mb-0">
					© {new Date().getFullYear()} Vignesh Kumar Pandian | Built
					with Next.js
				</p>
			</div>
		</footer>
	);
}