
import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-dark-900 p-5 md:p-6 flex justify-between items-center text-white border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-brand-600 p-2 rounded-lg">
                <FileText className="text-white" size={24} />
             </div>
             <div>
                <h2 className="font-display font-bold text-lg md:text-xl uppercase tracking-wider">Terms & Policies</h2>
                <p className="text-gray-400 text-xs">Gopeng Glamping Park Rules & Regulations</p>
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
            
            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">General Policies</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>Upon check-in, guests must sign an indemnity form. Our staff will inform all guests about this requirement.</li>
                    <li>A <strong>RM50 security deposit per tent</strong> is required upon check-in, refundable at check-out if the tent remains in good condition. Please retain the deposit receipt for refund purposes.</li>
                    <li>Please be informed that the State of Perak has impose <strong>Local Service Charges at RM3.00 per room per night</strong> accordance to Perak Hotels Regulations 2024 which will be collected upon check in.</li>
                    <li><strong>Check-in time</strong> is between 3:00 pm and 10:00 pm. For arrivals after 10:00 pm, please notify us in advance.</li>
                    <li><strong>Check-out time</strong> is between 7:00 am and 12:00 pm. For departures before 7:00 am, please notify us in advance.</li>
                    <li>
                        <strong>Late check-out charges:</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>RM50 per hour until 2:00 pm.</li>
                            <li>After 2:00 pm, a full day's rate, following the cheapest available rate of the day, will be charged.</li>
                            <li>If a guest fails to check out after 2:30 pm and the tents/rooms are fully occupied/fully booked, management reserves the right to enter the room, remove all belongings, and apply the above charges.</li>
                        </ul>
                    </li>
                    <li>Weekday rates apply to Monday through Thursday, while weekend rates apply to Friday through Sunday.</li>
                </ul>
            </section>

            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Booking and Reservation</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>Our primary booking channel is through our website, www.gopengglampingpark.com. Bookings made through other online platforms such as OTA or Klook are third-party bookings and may not reflect actual availability with us. We do not assume responsibility for bookings made through third-party channels.</li>
                    <li>Depending on the booking type (weekday, weekend, or promo), a deposit or full payment may be required at the time of booking. Payment can be made via online bank transfer or on-site credit/debit card payment.</li>
                    <li>Upon payment confirmation, you will receive a booking confirmation email. The remaining balance is due 7 or 14 days before the arrival date, depending on the booking size.</li>
                    <li>Bookings made within 7 or 14 days of the arrival date, depending on the booking size, require full payment at the time of booking.</li>
                    <li>Any changes to bookings, cancellations, or amendments must be made in writing via WhatsApp or email to avoid misunderstandings. Refunds are subject to a 10% cancellation surcharge.</li>
                </ul>
            </section>

            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Cancellation, Amendment, Refund</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>Cancellation or amendment requests must be made at least <strong>7 days or 14 days</strong> (for group booking more than 3 tents) before the arrival date, depending on the booking size.</li>
                    <li>Refunds are subject to a <strong>10% cancellation surcharge</strong>, and no refunds will be issued for cancellations made less than 7 or 14 days before the arrival date.</li>
                    <li>Date changes made more than 7 or 14 days before the original arrival date are allowed once without charges, with subsequent changes incurring a fee of RM20 per tent per night.</li>
                </ul>
            </section>

            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Children Policy</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>Children aged 6 to 12 years old are charged at kids' rates.</li>
                    <li>Children aged 5 and below stay for free under the following conditions:
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Weekdays: Subject to maximum tent occupancy.</li>
                            <li>Weekends: One child stays free for every two paying adults sharing the same bed.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Safety and Disclaimer</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>All guests must fill out a disclaimer form during check-in without exceptions.</li>
                    <li>Guests acknowledge the natural and man-made hazards on the property and participate at their own risk.</li>
                    <li>Glamping Park Travel & Tours Sdn Bhd accepts no liability for accidents, loss of property, or personal injury during the stay.</li>
                </ul>
            </section>

             <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">House Rules</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-dark-900 mb-2 uppercase text-sm tracking-wide">Pets</h4>
                        <p className="text-gray-600">No pets are allowed on the premises under any circumstances.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-dark-900 mb-2 uppercase text-sm tracking-wide">Alcohol & Non-Halal Food</h4>
                         <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>The property maintains a strict Halal status.</li>
                            <li>Alcohol and pork products are strictly prohibited on the premises.</li>
                            <li>Detection of prohibited items may result in refusal of entry and imposition of a fine.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-dark-900 mb-2 uppercase text-sm tracking-wide">Damage & Conduct</h4>
                         <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Guests are responsible for property care and reporting any damages promptly.</li>
                            <li>Smoking is prohibited except in designated areas.</li>
                            <li>Inappropriate behavior may result in eviction without refund.</li>
                            <li>No self-cooking is allowed inside the premise (BBQ, Stoves, etc).</li>
                        </ul>
                    </div>
                </div>
            </section>

             <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Taxes & Charges</h3>
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Sales and Service Tax (SST) of 8% applies to accommodation, meals, activities, and rentals.</li>
                    <li>SST of 6% applies to prepared meals add-ons.</li>
                    <li>Tourism Tax of RM10 per room per night applies to foreign passport holders.</li>
                    <li>Perak Local Service Charges at RM3.00 per room per night applies to all guests accordance to Perak Hotels Regulations 2024.</li>
                </ul>
            </section>

            <section>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 border-b border-gray-200 pb-2">Force Majeure</h3>
                 <ul className="list-decimal pl-5 space-y-2 text-gray-600 marker:font-bold marker:text-brand-600">
                    <li>Glamping Park Travel & Tours Sdn Bhd is not liable for non-performance due to events beyond its reasonable control.</li>
                    <li>Pandemic outbreak-related cancellations result in no charges, with the initial deposit not forfeited for rescheduling within six months.</li>
                    <li>No Refunds for cancelled activities due to weather or unforeseen causes.</li>
                </ul>
            </section>

             <section className="bg-gray-100 p-6 rounded-xl">
                <h4 className="font-bold text-dark-900 mb-2">MS2610:2015 Muslim-Friendly Hospitality Service Policy</h4>
                <p className="text-gray-600 mb-4">Committed to providing excellent services to all guests, adhering to MS 2610:2015 standards for Muslim-friendly hospitality.</p>
                
                <h4 className="font-bold text-dark-900 mb-2">Intellectual Properties</h4>
                <p className="text-gray-600">Gopeng Glamping Park is the intellectual property of Glamping Park Travel and Tour Sdn Bhd. Commercial usage of brand materials requires official approval.</p>
            </section>

        </div>
      </div>
    </div>
  );
};

export default TermsModal;
