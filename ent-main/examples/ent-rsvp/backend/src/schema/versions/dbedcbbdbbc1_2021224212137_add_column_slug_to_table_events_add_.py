# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add column slug to table events
add unique constraint events_unique_slug

Revision ID: dbedcbbdbbc1
Revises: 40753f0af94b
Create Date: 2021-02-24 21:21:37.360211+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'dbedcbbdbbc1'
down_revision = '40753f0af94b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('slug', sa.Text(), nullable=True))
    op.create_unique_constraint('events_unique_slug', 'events', ['slug'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('events_unique_slug', 'events', type_='unique')
    op.drop_column('events', 'slug')
    # ### end Alembic commands ###