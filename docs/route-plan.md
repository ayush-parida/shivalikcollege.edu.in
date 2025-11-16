# Route Conversion Plan

To replace the catch-all `app/[...slug]/page.tsx`, we'll begin by hand-crafting high-priority routes that currently power admissions content and school overviews.

## Wave 1 Targets

1. `/college/shivalik-college-of-engineering`
2. `/college/college-of-pharmacy`
3. `/college/shivalik-institute-of-professional-studies`
4. `/course/academics/shivalik-college-of-pharmacy/b-pharm`
5. `/course/academics/shivalik-college-of-pharmacy/d-pharm`

Each of these pages already has curated copy (or captured source material) and sits near the top of the navigation hierarchy, making them the best candidates for the initial conversion wave. Subsequent waves can iterate through the remaining `college/*` and `course/*` entries once the shared renderer and data model stabilize.
