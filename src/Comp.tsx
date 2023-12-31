import { memo } from "react"

interface IComp{
  obj: {n:number}
}

export const Comp: React.FC<IComp> = memo(({obj}) => {
  console.log("render Comp")
  return(
    <h1>Num is: {obj.n}</h1>
  )
},(prevProps, nextProps) => {
  return prevProps.obj.n === nextProps.obj.n
})