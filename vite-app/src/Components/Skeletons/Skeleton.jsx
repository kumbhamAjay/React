import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const CustomSkeleton=()=>{

    return (
        <div>
             <SkeletonTheme 
        baseColor="#ebebeb" 
        highlightColor="#3254a8"
        height={"200"}
        width={"200px"}
       >
          <p>
            <Skeleton count={3} height={"200px"} width={"100%"} circle={true} />
          </p>
        </SkeletonTheme>

        </div>
       
      );
}
export default CustomSkeleton
