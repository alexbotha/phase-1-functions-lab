function distanceFromHqInBlocks(distance) {
const headQ = 42
if (distance >= 42){
return (distance - headQ)
}
else if (distance < 42){
  return Math.abs(distance - headQ)
}
}
//////////////////////////////////////////////////////////////////////////////

function distanceFromHqInFeet(blockNumber) {
 return distanceFromHqInBlocks(blockNumber) * 264;
 }

 ///////////////////////////////////////////////////////////////////////

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264
    }

//////////////////////////////////////////////////////////

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) < 400){
    return (0)

  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02

  } else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return (25)

} else (distanceTravelledInFeet(start, destination) > 2500)
  return('cannot travel that far')
}





