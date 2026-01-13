import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Tag, FileText, Layers, AlertTriangle, CheckCircle, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function CpcbSimpBlog() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">SIMP Portal Guide</span>
          </div>
          {/* <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm flex items-center gap-2">
            Open Portal <ExternalLink className="w-4 h-4" />
          </button> */}
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 pt-12 pb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          CPCB's SIMP Portal: A Step Towards Streamlined Plastic Waste Management Compliance
        </h1>
        <div className="flex items-center gap-6 text-gray-600 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>November 4, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Devesh Malu</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Compliance</span>
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">CPCB</span>
          <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Plastic Waste</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PWM Rules</span>
        </div>
      </motion.div>

      {/* Featured Image / Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 mb-12"
      >
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-12 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <FileText className="w-12 h-12 flex-shrink-0 mt-1" />
            <div>
              <p className="text-emerald-50 text-lg leading-relaxed">
                The SIMP portal (operational from January 4, 2025) brings a centralised interface to submit KYC and compliance data aligned with the PWM Rules (amendments dated October 30, 2024). This comprehensive guide will help you navigate the portal and prepare your documentation effectively.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Introduction */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the SIMP Portal</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Simplified Integrated Management Portal (SIMP) represents a significant advancement in environmental compliance for businesses dealing with plastic materials. Launched by the Central Pollution Control Board, this portal consolidates multiple reporting requirements into a single, streamlined interface.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you're a Producer, Importer, or Brand Owner (PIBO), a seller of plastic raw materials, or an importer of virgin plastic, this portal will become your primary compliance interface. The system is designed to reduce paperwork, improve transparency, and ensure that all stakeholders in the plastic supply chain are accountable for their environmental impact.
          </p>
        </motion.article>

        {/* Article Section 1 */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User-Friendly Interface with Structured Categorization</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The SIMP portal offers an intuitive user interface that guides you through the submission process step by step. The portal has been designed with input from industry stakeholders and features structured categories for different types of entities including sellers, importers, and manufacturers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The submission flow follows a logical KYC-first approach, ensuring that your organization's basic information is verified before you proceed to more detailed compliance reporting. This helps prevent errors and reduces the likelihood of submissions being rejected due to incomplete or incorrect company details.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            However, one significant challenge that many businesses face is the categorization of sales and procurement according to MSME (Micro, Small, and Medium Enterprises) criteria. The portal requires you to classify your customers and suppliers into these categories, which can be complex when dealing with a large number of transactions or when your trading partners haven't clearly disclosed their MSME status.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Step-by-step guided submission process</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Role-based dashboards for different entity types</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Real-time validation of entered data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span>Document upload functionality with format validation</span>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* Article Section 2 */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Preparation for Financial Year 2022-23</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            One of the most critical aspects of SIMP portal compliance is preparing comprehensive data from Financial Year 2022-23. This historical data forms the baseline for your compliance reporting and will be used by regulators to verify your submissions against other government databases.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The data preparation process involves gathering procurement records, sales information, and mapping these transactions to the appropriate categories. For many businesses, this is the most time-consuming part of the compliance process. You'll need to collect purchase invoices, sales ledgers, GST returns, and other documentation that proves the volume and nature of plastic materials handled by your organization.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The categorization requirement adds another layer of complexity. You must identify which of your customers and suppliers fall into categories such as small/micro producers, medium producers, large producers, and brand owners. This information isn't always readily available, and you may need to reach out to your trading partners to confirm their status.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-blue-900 font-medium mb-3">
              <strong>Why preparing FY 2022-23 data matters:</strong>
            </p>
            <p className="text-blue-800 mb-3">
              Regulators will cross-verify your reported sales and procurement data against GST returns, customs records, and other government databases. Having reconciled ledgers and accurate category mapping ready will significantly reduce delays during the submission process and minimize the risk of queries or rejections.
            </p>
            <p className="text-blue-800">
              Additionally, this historical data will serve as the foundation for your extended producer responsibility calculations and recycling obligations under the PWM Rules.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection Checklist:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Complete Sales Ledger (FY 2022-23)</p>
                  <p className="text-sm text-gray-600">Include customer names, quantities, and invoice values</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Procurement Records</p>
                  <p className="text-sm text-gray-600">All purchase invoices for plastic raw materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">MSME Classification Data</p>
                  <p className="text-sm text-gray-600">Udyam registration or turnover details of customers/suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">GST Returns (GSTR-1 and GSTR-3B)</p>
                  <p className="text-sm text-gray-600">For reconciliation purposes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Import/Export Documentation</p>
                  <p className="text-sm text-gray-600">If applicable - customs declarations and bills of entry</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Article Section 3 */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Gap: No Recycled Content Field</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            One of the most significant limitations of the current SIMP portal is the absence of a field to specify the percentage of recycled plastic content used in production. This is a critical oversight, as recycled content tracking is one of the key objectives of the amended PWM Rules.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The PWM Rules mandate specific percentages of recycled content for different categories of plastic products, with these percentages increasing over time. Without a mechanism to report this data in the portal, regulators cannot effectively monitor compliance with recycled content requirements, and businesses cannot demonstrate their adherence to these rules through the official platform.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This limitation affects producers who use recycled plastic in their manufacturing processes and need to claim credit for doing so. It also impacts the broader circular economy goals of the PWM Rules, as there's currently no centralized way to track the flow of recycled materials through the supply chain.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex items-start gap-4 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-amber-900 font-medium mb-2"><strong>Important Advisory</strong></p>
              <p className="text-amber-800 mb-3">
                While the portal currently lacks a recycled content capture field, businesses should maintain detailed internal records of recycled plastic usage. This includes:
              </p>
              <ul className="text-amber-800 space-y-2 ml-4">
                <li>• Percentage of recycled content in each product category</li>
                <li>• Source and certification of recycled materials</li>
                <li>• Purchase invoices from recycled plastic suppliers</li>
                <li>• Manufacturing records showing recycled content usage</li>
              </ul>
              <p className="text-amber-800 mt-3">
                Track this requirement internally until portal updates arrive. Once the field is added, you'll need to be able to provide historical data to demonstrate ongoing compliance.
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The CPCB has acknowledged this limitation and indicated that future updates to the portal will include comprehensive recycled content tracking. However, no specific timeline has been provided for this enhancement. In the meantime, businesses should prepare to submit this information through alternative channels if requested during audits or inspections.
          </p>
        </motion.article>

        {/* Article Section 4 */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operational Status and Current Functionality</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The SIMP portal's launch on January 4, 2025, was met with a mix of anticipation and initial challenges. Early adopters who attempted to use the portal in the first few days encountered various technical issues including submission failures, timeout errors, and problems with document uploads.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            These early issues were typical of a new system handling a large volume of users simultaneously. The CPCB technical team worked quickly to address the most critical problems, and by the end of January, most of these issues had been resolved. The portal is now functioning smoothly for the majority of users.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Current functionality includes user registration, KYC submission, data entry for sales and procurement, document uploads, and preliminary report generation. The portal supports multiple file formats including PDF, Excel, and scanned images for supporting documentation.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-6">
            <p className="text-emerald-900 mb-3">
              <strong>Current Portal Status:</strong> Operational
            </p>
            <p className="text-emerald-800 mb-3">
              Minor early issues have been resolved, and the portal is now stable for regular use. However, we recommend following these best practices:
            </p>
            <ul className="text-emerald-800 space-y-2 ml-4">
              <li>• Keep screenshots of all submission confirmations</li>
              <li>• Save copies of all uploaded documents with timestamps</li>
              <li>• Download acknowledgment receipts immediately after submission</li>
              <li>• Maintain a submission log with dates and reference numbers</li>
              <li>• Use supported browsers (Chrome, Firefox, Edge) for best compatibility</li>
            </ul>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The portal also includes a help desk feature where users can raise tickets for technical issues or clarifications on data requirements. Response times have improved significantly since launch, with most queries being addressed within 48-72 hours.
          </p>
        </motion.article>

        {/* Significance Section */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why SIMP Matters for Your Business</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The SIMP portal represents a significant shift in how plastic waste management compliance is handled in India. For businesses, this means both new obligations and new opportunities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From a compliance perspective, the portal centralizes all reporting requirements, making it easier to meet regulatory obligations. Instead of dealing with multiple state pollution control boards and submitting paper-based reports, you now have a single digital interface. This standardization also means that compliance requirements are more transparent and easier to understand.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The portal also improves transparency across the plastic supply chain. Regulators can now track material flows more effectively, identify gaps in recycling systems, and ensure that extended producer responsibility obligations are being met. For responsible businesses, this creates a level playing field where compliance is rewarded and non-compliance is more easily detected.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Looking ahead, future updates to the portal are expected to include features for tracking recycled content, managing plastic waste collection systems, and facilitating transactions between producers and recyclers. These enhancements will make the portal an even more central tool in India's circular economy initiatives.
          </p>
        </motion.article>

        {/* Quick Facts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Facts & Key Dates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">Launch Date</h3>
              <p className="text-2xl font-bold text-emerald-600">January 4, 2025</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Data Period</h3>
              <p className="text-2xl font-bold text-blue-600">FY 2022-23</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">Primary Users</h3>
              <p className="text-lg font-semibold text-purple-600">PIBOs, Sellers, Importers</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-2">PWM Rules Reference</h3>
              <p className="text-lg font-semibold text-amber-600">October 30, 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Data Preparation Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Data Preparation Checklist</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Use this detailed checklist to ensure you have all necessary documentation and data ready before beginning your SIMP portal submission. This preparation will significantly reduce the time required to complete your filing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Item</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Why It's Required</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Example Sources</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">KYC Details</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">KYC-first portal requirement for entity verification</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Company PAN, GST certificate, Authorized signatory details, Address proof</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Sales by Category</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Must map to MSME categories for compliance calculation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Sales ledger (FY 2022-23), Customer classification, GSTR-1 returns</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Procurement Summary</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Track input materials & volumes for material balance</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Purchase invoices, Supplier statements, Import documents</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Product Categories</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Different EPR obligations apply to different product types</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Product catalog, HSN codes, Material composition details</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Recycled Content (Internal)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Track until portal supports it for future submissions</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Manufacturing records, Recycled material certificates, Supplier confirmations</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Financial Documents</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">For turnover verification and audit purposes</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Audited financials (FY 2022-23), Bank statements, ITR acknowledgments</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex gap-4">
            {/* <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Checklist
            </button>
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
              Start Submission
            </button> */}
          </div>
        </motion.div>

        {/* Developer Tips */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Tips for Compliance Teams & Integrators</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you're managing compliance for multiple entities or building integration systems with the SIMP portal, these technical recommendations will help streamline your processes.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                Create a Master Mapping Sheet
              </h3>
              <p className="text-gray-700">
                Before portal submission, create a comprehensive mapping sheet that links each invoice line item to its corresponding MSME category. This pre-work dramatically speeds up the data entry process and reduces classification errors. Include columns for invoice number, customer/supplier name, transaction amount, product type, and MSME classification.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                Maintain Internal Recycled Content Records
              </h3>
              <p className="text-gray-700">
                Even though the portal doesn't currently support recycled content reporting, maintain an internal field tracking the percentage of recycled plastic in each product. Store this with certification documents from suppliers. When the portal adds this functionality, you'll be able to update your records immediately without scrambling to reconstruct historical data.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                Validate Against GST Returns
              </h3>
              <p className="text-gray-700">
                Before submitting to SIMP, reconcile your FY 2022-23 totals with your GST returns (GSTR-1 and GSTR-3B). Regulators have access to GST data and significant discrepancies will trigger queries. Use accounting software exports or pivot tables to match your sales ledger totals with GST filing amounts. Document any legitimate differences (like exports, exempted supplies) with supporting evidence.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                Implement Version Control for Submissions
              </h3>
              <p className="text-gray-700">
                Create a systematic filing system for all portal submissions. Use a naming convention like "SIMP_[Entity]_[Submission Type]_[Date]_v[Version].pdf" for all saved documents and screenshots. This becomes crucial if you need to reference previous submissions during audits or when resolving disputes with regulatory authorities.
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">5</span>
                Build Buffer Time for Technical Issues
              </h3>
              <p className="text-gray-700">
                Don't wait until deadline day to submit. The portal may experience high traffic near submission deadlines, potentially causing slowdowns or timeouts. Plan to complete submissions at least 5-7 days before any deadline. This buffer also allows time to resolve any data validation errors or missing documentation issues that may arise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Immediate Action Steps</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Follow this prioritized action plan to ensure smooth compliance with SIMP portal requirements. These steps are arranged in order of urgency and dependency.
          </p>
          <div className="space-y-4">
            <div className="bg-white border-2 border-emerald-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-emerald-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gather FY 2022-23 Sales & Procurement Data</h3>
                  <p className="text-gray-700 mb-3">
                    Start immediately with collecting complete sales and procurement records for Financial Year 2022-23. This is the foundation of your submission and will take the most time if your records aren't already organized.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Priority: CRITICAL | Timeline: Start immediately | Estimated effort: 2-4 weeks</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prepare MSME Mapping</h3>
                  <p className="text-gray-700 mb-3">
                    Create even rough categories for your customers and suppliers based on their turnover or Udyam registration status. You can refine these classifications as you get more information, but having initial categories will help you estimate your compliance obligations.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Priority: HIGH | Timeline: Week 2-3 | Estimated effort: 1-2 weeks</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-purple-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Internal Recycled Content Percentage</h3>
                  <p className="text-gray-700 mb-3">
                    Review your manufacturing records and procurement data to determine the percentage of recycled plastic content in your products. Obtain certificates from your recycled material suppliers. Keep this documentation ready for when the portal adds this field or for physical inspections.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Priority: MEDIUM | Timeline: Week 3-4 | Estimated effort: 3-5 days</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-teal-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Portal Registration & KYC</h3>
                  <p className="text-gray-700 mb-3">
                    Once your data is organized, register on the SIMP portal and complete your KYC submission. Have your company PAN, GST certificate, and authorized signatory details ready. The KYC approval process may take 3-5 business days.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Priority: HIGH | Timeline: After data preparation | Estimated effort: 2-3 hours + approval wait time</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-amber-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-amber-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">5</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Data & Download Acknowledgments</h3>
                  <p className="text-gray-700 mb-3">
                    After KYC approval, proceed with your data submission. Complete it in stages if needed, saving progress frequently. Once submitted, immediately download all acknowledgment receipts and confirmation documents. Store these securely with timestamps.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">Priority: HIGH | Timeline: After KYC approval | Estimated effort: 4-8 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('faq1')}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">What happens if I can't categorize all my customers by MSME status?</span>
                {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
              </button>
              {expandedSection === 'faq1' && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">
                    If you cannot definitively categorize a customer's MSME status, you should make a reasonable classification based on available information such as GST returns, invoice volumes, or public information about the company. Document your reasoning for the classification. In the portal, there may be an option to mark entries as "status unknown" or "pending verification." As a best practice, reach out to major customers and suppliers to request their Udyam registration number or turnover details, which will help you make accurate classifications.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('faq2')}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">Is there a deadline for FY 2022-23 data submission?</span>
                {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
              </button>
              {expandedSection === 'faq2' && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 mb-3">
                    While the portal became operational on January 4, 2025, specific submission deadlines for historical data (FY 2022-23) have been communicated through official CPCB circulars. These deadlines vary based on entity type:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Large producers and brand owners: Typically given 3-4 months from portal launch</li>
                    <li>• Medium-scale entities: May have 4-6 months</li>
                    <li>• Small and micro entities: Often given extended timelines of 6-9 months</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Check the latest CPCB notifications or the portal's dashboard for your specific deadline. Don't rely solely on generic information - log in to see deadline specific to your registration category.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('faq3')}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">Can I edit my submission after it's been filed?</span>
                {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
              </button>
              {expandedSection === 'faq3' && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 mb-3">
                    The SIMP portal typically allows amendments within a specific window after initial submission. However, the rules around amendments are strict:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• <strong>Before verification:</strong> You can usually edit submissions that haven't been reviewed by authorities</li>
                    <li>• <strong>After verification:</strong> Amendments require a formal request with justification and may need approval</li>
                    <li>• <strong>Minor corrections:</strong> Typographical errors may be correctable through the help desk</li>
                    <li>• <strong>Material changes:</strong> Significant data changes after submission may require submitting revised returns with explanatory notes</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    To avoid complications, thoroughly review all data before final submission. Use the portal's preview feature if available, and have a second person review critical numbers before you click submit.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('faq4')}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">What if my FY 2022-23 records are incomplete or missing?</span>
                {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
              </button>
              {expandedSection === 'faq4' && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 mb-3">
                    Incomplete records present a significant challenge, but there are several approaches to reconstruct the necessary data:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• <strong>GST Returns:</strong> Your GSTR-1 and GSTR-3B returns contain transaction-level details that can help reconstruct sales data</li>
                    <li>• <strong>Bank Statements:</strong> Payment records can help identify transactions even if invoices are missing</li>
                    <li>• <strong>Customer/Supplier Cooperation:</strong> Reach out to major trading partners for copies of invoices from their records</li>
                    <li>• <strong>Accounting Software Backups:</strong> Check if your accounting software has backup files or audit trails from FY 2022-23</li>
                    <li>• <strong>Email Archives:</strong> Search email for invoice attachments and purchase orders from that period</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    If gaps remain after exhausting these sources, document what you've done to reconstruct records. Submit what you have with a covering letter explaining the gaps and the efforts made to recover the data. This demonstrates good faith compliance efforts and may be considered during regulatory review.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('faq5')}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">Do I need to submit separately for each manufacturing location?</span>
                {expandedSection === 'faq5' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
              </button>
              {expandedSection === 'faq5' && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 mb-3">
                    The submission structure depends on your business organization:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• <strong>Single GST registration:</strong> If all locations operate under one GST number, typically one consolidated submission is required</li>
                    <li>• <strong>Multiple GST registrations:</strong> Each GST registration (typically representing different states) requires separate submissions</li>
                    <li>• <strong>Different legal entities:</strong> Subsidiary companies or separate legal entities must file independently</li>
                    <li>• <strong>Location-wise data:</strong> Within a single submission, you may need to provide location-wise breakdowns if the portal requires it</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Check the portal's guidance specific to your entity type. The KYC section should clarify whether you need single or multiple registrations based on your GST structure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources & Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Help Center</h3>
              <p className="mb-6 text-emerald-50">
                Access video tutorials, user guides, and step-by-step instructions for completing your SIMP portal submission.
              </p>
              {/* <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors flex items-center gap-2">
                Visit Help Center <ExternalLink className="w-4 h-4" />
              </button> */}
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="mb-6 text-blue-50">
                Experiencing technical issues? Raise a support ticket through the portal or contact the CPCB help desk directly.
              </p>
              {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
                Contact Support <ExternalLink className="w-4 h-4" />
              </button> */}
            </div>
          </div>
          <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Templates & Formats</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* <button className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow text-left">
                <Download className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="font-medium text-gray-900">Data Entry Template</p>
                <p className="text-sm text-gray-600">Excel format</p>
              </button> */}
              {/* <button className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow text-left">
                <Download className="w-6 h-6 text-blue-600 mb-2" />
                <p className="font-medium text-gray-900">MSME Mapping Sheet</p>
                <p className="text-sm text-gray-600">Excel format</p>
              </button> */}
              {/* <button className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow text-left">
                <Download className="w-6 h-6 text-purple-600 mb-2" />
                <p className="font-medium text-gray-900">Submission Checklist</p>
                <p className="text-sm text-gray-600">PDF format</p>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Export Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Share This Guide</h3>
            <p className="text-gray-300 mb-6">
              Export this comprehensive guide as a PDF to share with your compliance team, management, or consultants. Keep a copy for reference during your submission process.
            </p>
            {/* <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export as PDF
            </button> */}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead: The Future of SIMP</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The SIMP portal is not a static system - it represents the first phase of a broader digital transformation in plastic waste management compliance. The CPCB has indicated that several enhancements are planned for the coming months and years.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Expected future features include automated data validation against GST and customs databases, integration with state pollution control boards for unified compliance tracking, real-time dashboards showing your EPR obligations and achievements, marketplace functionality to connect producers with recyclers, and mobile applications for on-the-go access and updates.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Most importantly, the addition of recycled content tracking capabilities will close a significant gap in the current system. This will enable comprehensive monitoring of circular economy initiatives and ensure that India's ambitious targets for plastic waste recycling are tracked and achieved.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            For businesses, staying engaged with the portal's evolution is crucial. Subscribe to CPCB notifications, participate in stakeholder consultations when offered, and provide feedback on portal functionality. Your input can help shape a system that balances regulatory requirements with practical business needs.
          </p>
        </motion.article>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Compliance Journey?</h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              With this comprehensive guide in hand, you're well-equipped to navigate the SIMP portal successfully. Start your submission process today and ensure your business remains compliant with India's plastic waste management regulations.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg">
                Access SIMP Portal <ExternalLink className="w-5 h-5" />
              </button>
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors flex items-center gap-2 border-2 border-white">
                <Download className="w-5 h-5" />
                Download Full Guide
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About This Guide</h4>
              <p className="text-sm text-gray-400">
                This comprehensive guide is prepared for businesses and compliance teams navigating the CPCB SIMP portal. Information is current as of January 2025.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">CPCB Official Website</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PWM Rules 2024</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SIMP Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
              <p className="text-sm text-gray-400">
                This guide is for informational purposes. Always refer to official CPCB notifications for authoritative compliance requirements.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} SIMP Portal Guide — Prepared for businesses & compliance teams</p>
            <p className="mt-2">Last updated: January 2025</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}