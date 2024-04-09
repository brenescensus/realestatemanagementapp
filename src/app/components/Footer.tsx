import React from'react';
import Link from 'next/link';



export default function Footer(){
    return(
<footer>
        <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
<p>  copy; {new Date().getFullYear()} BCM Technologies. All Rights
</p>

          </div>
        </div>
      </div>
      </footer>
    );
}
