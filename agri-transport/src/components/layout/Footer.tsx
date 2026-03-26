export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-50 py-16 mt-20 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-400">Agri</span>Transport
            </h3>
            <p className="text-brand-200 text-sm leading-relaxed max-w-sm">
              Empowering Indian farmers with reliable, transparent, and affordable full-truck logistics. 
              Book trucks easily for your crops and get them delivered securely.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Contact Support</h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li className="flex items-center gap-2">
                <span className="font-medium text-brand-400">Email:</span> support@agritransport.in
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium text-brand-400">Phone:</span> +91 1800-AGRI-TRUCK
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium text-brand-400">HQ:</span> Bengaluru, Karnataka
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800/50 mt-12 pt-8 text-center text-sm text-brand-400/60 font-medium">
          © {new Date().getFullYear()} AgriTransport by Antigravity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
