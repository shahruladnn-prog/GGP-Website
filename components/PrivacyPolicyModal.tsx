import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-dark-900 p-5 md:p-6 flex justify-between items-center text-white border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-brand-600 p-2 rounded-lg">
                <Shield className="text-white" size={24} />
             </div>
             <div>
                <h2 className="font-display font-bold text-lg md:text-xl uppercase tracking-wider">Privacy Policy</h2>
                <p className="text-gray-400 text-xs">PDPA Act 2010 Compliance</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 overflow-y-auto leading-relaxed text-gray-700 text-sm md:text-base space-y-8 bg-gray-50/50">
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Effective Date</span>
                        <span className="font-semibold text-dark-900">25 August 2023</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Registration Number</span>
                        <span className="font-semibold text-dark-900">TH-SB25072023-01208</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">DATA PRIVACY POLICY STATEMENT</h3>
                <p className="text-justify">
                    At Glamping Park Travel & Tour SDN BHD, we are committed to safeguarding your personal data in 
                    accordance with the provisions of the Personal Data Protection Act 2010 (Akta 709). This Privacy Policy 
                    outlines how we collect, use, disclose, and protect your personal information. By interacting with our 
                    services and providing your personal data, you consent to the practices described in this policy.
                </p>
            </div>

            <div className="space-y-6">
                <section>
                    <h4 className="font-bold text-dark-900 mb-2">1. PERSONAL DATA COLLECTION</h4>
                    <p className="text-justify">
                        We may collect personal data from you directly or indirectly through various channels, including 
                        our website, mobile applications, forms, or other communication platforms. The types of personal 
                        data we collect may include but are not limited to your name, contact information, identification 
                        details, and other relevant information necessary for the purposes stated below.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">2. PROVISION OF PERSONAL INFORMATION</h4>
                    <p className="text-justify">
                        Provision of personal information is voluntary, but if you do not provide such personal information, 
                        we may not be able to send you the information that may be of interest to you, or provide you with 
                        the products, services, or information you requested.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">3. PURPOSE OF DATA COLLECTION</h4>
                    <p className="mb-2">We collect and process your personal data for the following purposes:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Providing you with the products or services you have requested.</li>
                        <li>Process and/or confirm bookings, reservations and making arrangements for rooms or any recreational activities.</li>
                        <li>Communicating with customer regarding promotions, tour details, updates, safety information and news.</li>
                        <li>Managing customer relationships and ensuring excellent service delivery.</li>
                        <li>Ensuring your safety during adventure activities, which may involve sharing relevant health information with guides.</li>
                        <li>Compliance with legal obligations as required by the law.</li>
                        <li>Conducting internal analysis and research to improve our offerings.</li>
                    </ul>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">4. DISCLOSURE OF PERSONAL DATA</h4>
                    <p className="text-justify">
                        We may share your personal data with third parties, including service providers, medical 
                        professionals (for safety reasons), and relevant authorities, solely for the purposes stated in this 
                        policy. We ensure that these parties adhere to the same level of privacy and security standards.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">5. DATA SECURITY</h4>
                    <p className="text-justify">
                        We implement technical and organizational measures to protect your personal data against 
                        unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the 
                        internet is completely secure. While we strive to protect your data, we cannot guarantee its 
                        absolute security.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">6. YOUR RIGHTS</h4>
                    <p className="text-justify">
                        You have the right to access, correct, or update your personal data in our records. You can also 
                        request the deletion or restriction of your data, as permitted by the law. To exercise these rights, 
                        please contact us at <a href="mailto:gopengglampingpark@gmail.com" className="text-brand-600 hover:underline">gopengglampingpark@gmail.com</a> or call +6013 240 8857.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">7. RETENTION PERIOD</h4>
                    <p className="text-justify">
                        We retain your personal data for as long as necessary to fulfil the purposes stated in this policy or 
                        as required by applicable laws. Once the data is no longer needed, it will be securely disposed of.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">8. CHANGES TO PRIVACY POLICY</h4>
                    <p className="text-justify">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                        requirements. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section>
                    <h4 className="font-bold text-dark-900 mb-2">9. CONTACT US</h4>
                    <p className="text-justify">
                        If you have any questions, concerns, or requests regarding your personal data or this Privacy Policy, 
                        please contact our Data Protection Officer at <a href="mailto:gopengglampingpark@gmail.com" className="text-brand-600 hover:underline">gopengglampingpark@gmail.com</a>
                    </p>
                </section>
                
                <div className="bg-gray-100 p-4 rounded-lg mt-4 text-xs text-gray-500 italic">
                    By using our services, you acknowledge that you have read and understood this Privacy Policy and 
                    agree to its terms.
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200 text-center space-y-1">
                <p className="font-bold text-dark-900 uppercase">Glamping Park Travel & Tour SDN BHD</p>
                <p className="text-gray-500 text-sm">LOT 10846 JALAN BESAR KG CHULEK, 31600, GOPENG PERAK.</p>
                <p className="text-gray-500 text-sm">+6013-2408857 / +60-53510248</p>
                <a href="mailto:gopengglampingpark@gmail.com" className="text-brand-600 text-sm hover:underline">gopengglampingpark@gmail.com</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;