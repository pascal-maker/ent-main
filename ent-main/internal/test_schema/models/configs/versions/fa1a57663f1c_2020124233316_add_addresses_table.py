# Code generated by github.com/lolopinto/ent/ent, DO NOT edit. 

"""add addresses table

Revision ID: fa1a57663f1c
Revises: 42dd0bb4b460
Create Date: 2020-01-24 23:33:16.512399+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'fa1a57663f1c'
down_revision = '42dd0bb4b460'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('addresses',
    sa.Column('id', postgresql.UUID(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=False),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=False),
    sa.Column('country', sa.Text(), nullable=False),
    sa.Column('zip', sa.Text(), nullable=False),
    sa.Column('street_address', sa.Text(), nullable=False),
    sa.Column('state', sa.Text(), nullable=False),
    sa.Column('city', sa.Text(), nullable=False),
    sa.Column('resident_names', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id', name='addresses_id_pkey')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('addresses')
    # ### end Alembic commands ###
