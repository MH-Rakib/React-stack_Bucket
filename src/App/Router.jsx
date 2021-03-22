import { Redirect, Router } from '@reach/router';
// Pages
import NotFound from '../Pages/404 Page';
import BucketDetails from '../Pages/Bucket details';
import BucketPage from '../Pages/Bucket page';

function AppRouter() {
    return (
        <Router>
            <BucketPage path="/" />
            <Redirect from="buckets" to="/" noThrow />
            <BucketDetails path="/buckets/:bucketsId" />
            <NotFound default />
        </Router>
    );
}
export default AppRouter;
