import { useState, useRef, useMemo } from "react"


const WheelSpin = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
    {
      id: 4,
      name: "Item 4",
    },
    {
      id: 5,
      name: "Item 5",
    },
    {
      id: 6,
      name: "Item 6",
    },
    {
      id: 7,
      name: "Item 7",
    },
    {
      id: 8,
      name: "Item 8",
    },
    {
      id: 9,
      name: "Item 9",
    },
    {
      id: 10,
      name: "Item 10",
    },
    {
      id: 11,
      name: "Item 11",
    },
    {
      id: 12,
      name: "Item 12",
    },
  ]
  const [rotation, setRotation] = useState(-14)
  const [isSpinning, setIsSpinning] = useState(false)
  const wheelRef = useRef<HTMLDivElement | null>(null)

  const wheelStyle = useMemo(() => {
    const colors = [
      "#ed1e24",
      "#dc088c",
      "#9d248f",
      "#6d2c91",
      "#3853a4",
      "#036836",
      "#01a04d",
      "#6abd45",
      "#f0ea0e",
      "#fbac18",
      "#f47720",
      "#ef4a24",
    ]
    const gradientStops = colors
      .map((color, index) => {
        const start = (index * 360) / items.length
        const end = ((index + 1) * 360) / items.length
        return `${color} ${start}deg ${end}deg`
      })
      .join(", ")

    return {
      background: `conic-gradient(from 0deg, ${gradientStops})`,
      transform: `rotate(${rotation}deg)`,
      transition: "transform 1s ease-out",
    }
  }, [rotation, items.length])

  const getItemStyle = (index: number) => ({
    transform: `rotate(${(index * 360) / items.length + 360 / items.length / 2
      }deg)`,
  })

  const spinWheel = () => {
    const target = 1 // Fixed target for 1 spin
    const randomDegrees = target * 360
    const newRotation = rotation - randomDegrees

    setRotation(newRotation)
    setIsSpinning(true)

    setTimeout(() => {
      setIsSpinning(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="relative mb-8 w-[500px] h-[500px]">
        <div
          className="relative w-full h-full border-4 border-gray rounded-full shadow-lg"
          style={wheelStyle}
          ref={wheelRef}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute flex items-center justify-center w-full h-full font-bold text-white"
              style={getItemStyle(index)}
            >
              <span className="absolute flex flex-row transform rotate-180 -translate-x-1/2 -translate-y-1/2 top-3">
                {item.id}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 z-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 22l-4-4l1.4-1.425l1.6 1.6V13.9q-1.725-.35-2.863-1.713T7 9q0-2.075 1.463-3.537T12 4t3.538 1.463T17 9q0 1.825-1.137 3.188T13 13.9v4.275l1.6-1.575L16 18z"></path></svg>
        </div>
        <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="flex items-center justify-center w-20 h-20 font-semibold text-black bg-white rounded-full hover:bg-purple-100 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  )
}

export default WheelSpin
