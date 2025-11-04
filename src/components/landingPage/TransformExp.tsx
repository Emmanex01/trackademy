import { ChevronRight } from "lucide-react"

const TransformExp = () => {
  return (
    <div className="p-4 md:pl-32 md:py-8 text-white bg-gray-800 flex justify-start items-center min-h-[300px] mt-16 rounded-lg">
      <div className="max-w-4xl mx-auto p-6 text-center space-y-4 md:max-w-[450px] md:text-start md:mx-0">
        <h2 className="font-bold text-2xl">Ready to Transform Your Learning Experience?</h2>
        <p>Join thousands of students who are already experiencing more engaging and effective online education.</p>
        <button className="btn">
            Get Started Today
            <ChevronRight/>
        </button>
      </div>
    </div>
  )
}

export default TransformExp
